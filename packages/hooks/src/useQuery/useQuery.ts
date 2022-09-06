import { QueryFunctionContext, useQuery as reactUseQuery } from 'react-query';
import {
  QueryKey,
  QueryObserverResult,
  QueryStatus,
  RefetchOptions,
} from 'react-query/types/core/types';
import { isFunction } from 'lodash-es';
import { useMemo } from 'react';

export interface IUseQueryOptions<TResponse, TError = Error> {
  id: string;
  enabled?: boolean;
  initialData?: any;
  refetchInterval?: number;
  retry?: number;
  onSuccess?: (data: TResponse) => void;
  onError?: (err: TError) => void;
  responseFormatter?: (data: TResponse) => TResponse;
  staleTime?: number;
  cacheTime?: number;
}

export type IUseQueryOptionsWithoutId<TResponse, TError = Error> = Omit<
  IUseQueryOptions<TResponse, TError>,
  'id'
>;

export interface IUseQueryStatus<TError> {
  loading: boolean;
  idle: boolean;
  success: boolean;
  status: QueryStatus;
  error: TError | undefined;
}

export interface IUseQueryActions<TData, TError> {
  refetch: (
    options?: RefetchOptions,
  ) => Promise<QueryObserverResult<TData, TError>>;
}

/**
 * UseQuery.
 *
 * @summary Хук сбора данных с бэкенда.
 * @param fn - Функция сбора данных с бэкенда.
 * @param deps - Зависимости.
 * @param options - Дополнительные параметры.
 * @description Содержит ответ бэкенда, ошибки запроса и статус ожидания.
 * @returns [IUseQueryStatus<TError>, TResponse | unknown, IUseQueryActions<TResponse, TError>].
 */
export const useQuery = <
  TResponse = unknown,
  TParams = unknown,
  TError = Error
>(
  fn: (params?: TParams) => Promise<TResponse> | TResponse,
  options?: IUseQueryOptions<TResponse, TError>,
  deps: any[] = [],
): [
  IUseQueryStatus<TError>,
  TResponse | undefined,
  IUseQueryActions<TResponse, TError>,
] => {
  const { id = 'use-query-request', responseFormatter, ...hookOptions } =
    options || {};

  const source = ({ pageParam }: QueryFunctionContext<QueryKey, TParams>) =>
    fn(pageParam);

  const {
    isFetching: loading,
    isIdle: idle,
    status: queryStatus,
    isSuccess: success,
    data,
    error,
    refetch,
  } = reactUseQuery<TResponse, TError>([id, ...deps], source, hookOptions);

  const status: IUseQueryStatus<TError> = {
    loading,
    idle,
    success,
    status: queryStatus,
    error: error || undefined,
  };

  const actions: IUseQueryActions<TResponse, TError> = {
    refetch,
  };

  const result = useMemo<TResponse | undefined>(() => {
    if (!loading && !error && data && isFunction(responseFormatter)) {
      return responseFormatter(data);
    }

    return data;
  }, [data]);

  return [status, result, actions];
};
