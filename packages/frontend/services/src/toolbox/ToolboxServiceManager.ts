import { noop } from 'lodash-es';
import { camelizeKeys } from 'humps';
import { v4 as uuidv4 } from 'uuid';

import { SocketReadyState } from './constants/socket';
import { Event } from './constants/events';
import MessagesStorage from './MessagesStorage';

const AUTO_RECONNECT_TIMEOUT = 5 * 1000;
const CONNECT_TIMEOUT = 6000;

export type ToolboxServiceManagerProps = {
  url: string;
  autoReconnect?: boolean;
  autoReconnectTimeout?: number;
  captureException(exception: any, captureContext?: any): string;
};

class ToolboxServiceManager {
  private readonly url: string;

  private readonly autoReconnect: boolean;

  private readonly autoReconnectTimeout: number;

  private readonly captureException: (
    exception: any,
    captureContext?: any,
  ) => string;

  private eventsListeners: { event: string; listener: EventListener }[];

  private socketState?: Promise<null>;

  private socket: WebSocket;

  private messagesStorage?: MessagesStorage;

  constructor(props: ToolboxServiceManagerProps) {
    const {
      url,
      autoReconnect,
      autoReconnectTimeout,
      captureException,
    } = props;

    this.url = url;
    this.captureException = captureException || noop;
    this.autoReconnect = autoReconnect || false;
    this.autoReconnectTimeout = autoReconnectTimeout || AUTO_RECONNECT_TIMEOUT;

    // массив обработчиков событий до создания сокета
    this.eventsListeners = [];

    this.handleSocketMessage = this.handleSocketMessage.bind(this);
  }

  // Регистрация всех listener добавленных с помощью addEventListener
  private addEventsListener() {
    this.eventsListeners.forEach(({ event, listener }) => {
      this.socket.addEventListener(event, listener);
    });
  }

  /**
   * Хэндлер сообщений с toolbox'а
   */
  private handleSocketMessage(event: MessageEvent) {
    const { data } = event;
    let response = {};

    type ToolboxResponse = {
      success?: boolean;
      messageId?: string;
      data?: unknown;
      message?: string;
    };

    if (typeof data === 'string') {
      response = camelizeKeys(JSON.parse(data));
    }

    const {
      success,
      messageId,
      data: responseData,
      message: errorMessage,
    } = response as ToolboxResponse; // у нас нет гарантий, что модель будет такой

    if (messageId) {
      const message = this.messagesStorage?.getItem(messageId);

      // если сообщение найдено в this.messagesStorage значит сервис был его инициатором
      if (message) {
        if (success) {
          message.resolve(responseData);
        } else {
          const error = new Error(errorMessage);

          this.captureException(error, {
            tags: { toolboxRequest: 'toolbox request' },
            contexts: {
              request: { id: message.id, data: JSON.stringify(message.data) },
              response,
            },
          });

          message.reject(error);
        }

        // нужно удалить обработанные сообщения
        this.messagesStorage?.removeItem(messageId);
      }
    }
  }

  protected connect() {
    // предотвращает повторное создание сокета
    if (this.socket?.readyState === SocketReadyState.connecting) return;

    const makeSocket = () => new WebSocket(this.url);

    this.socket = makeSocket();
    this.socket.onmessage = this.handleSocketMessage;

    this.addEventsListener();

    // если за 4 секунды не смогли подключиться к сокету, то значит нет тулбокса
    const connectTimer = setTimeout(() => {
      this.socket.close();
    }, CONNECT_TIMEOUT);

    // состояние сокета необходимо для того что бы понять готов ли
    // toolbox принимать сообщения
    this.socketState = new Promise(resolve => {
      this.socket.onopen = () => {
        // если за 4 секунды успели подключиться к тулбоксу, то надо отменить разрыв соединения
        clearTimeout(connectTimer);

        resolve(null);
      };

      if (this.autoReconnect) {
        this.socket.onclose = () => {
          setInterval(() => {
            this.socket = makeSocket();
          }, this.autoReconnectTimeout);
        };
      }
    });
    // хранилище текущих сообщений позволяет понять
    // текущее состояние сообщений
    this.messagesStorage = new MessagesStorage();
  }

  /**
   * Метод отправки сообщений в toolbox
   */
  protected sendMessage<Params, Result>(
    operationId: number,
    data?: Params,
  ): Promise<Result> {
    return new Promise<Result>((resolve, reject) => {
      // сообщение можно отправить только тогда когда ws-соединение готово

      if (!this.socketState) {
        this.connect();
      }

      this.socketState?.then(() => {
        // code добавляется в messageId, чтобы в e2e тестах мы могли найти нужный message
        const messageId: string = `code=${operationId}_${uuidv4()}`;
        const request = {
          Code: operationId,
          Data: JSON.stringify(data || null),
          MessageId: messageId,
        };

        // отправляем сообщение в toolbox
        this.socket.send(JSON.stringify(request));
        // добавляем сообщение в this.messagesStorage
        this.messagesStorage?.setItem(messageId, {
          id: operationId,
          data,
          resolve: (value: unknown) => {
            // у нас нет гарантий, что value имеет тип Result
            resolve(value as Result);
          },
          reject,
        });
      });
    });
  }

  // Регистрирует обработчик события
  protected addEventListener(event: Event, listener: EventListener) {
    this.eventsListeners.push({ event, listener });
  }
}

export default ToolboxServiceManager;
