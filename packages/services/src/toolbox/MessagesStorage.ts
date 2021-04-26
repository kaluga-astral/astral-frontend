import { omit } from 'lodash-es';

export type Message = {
  id: number;
  data?: unknown;
  resolve: (value?: unknown) => void;
  reject: (error?: Error) => void;
};

class ToolboxServiceMessagesStorage {
  storage: {
    [key: string]: Message;
  };

  constructor() {
    this.storage = {};
  }

  removeItem = (messageId: string): void => {
    this.storage = omit(this.storage, messageId);
  };

  setItem = (messageId: string, message: Message): void => {
    this.storage = { ...this.storage, [messageId]: message };
  };

  getItem = (messageId: string): Message | undefined => this.storage[messageId];
}

export default ToolboxServiceMessagesStorage;
