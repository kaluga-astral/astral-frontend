import { useMutation as reactUseMutation } from 'react-query';
import { UseMutationOptions } from 'react-query/types/react/types';
import { MutationFunction } from 'react-query/types/core/types';

export interface IUseMutationOptions<
  TResponse = unknown,
  TParams = void,
  TError = Error
> extends UseMutationOptions<TResponse, TError, TParams> {}

export interface IUseMutationStatus<TError> {
  loading: boolean;
  success: boolean;
  default: boolean;
  error: TError | undefined;
}

export interface IUseMutationActions<TResponse, TParams> {
  mutate: (params?: TParams) => void;
  mutateAsync: (params?: TParams) => Promise<TResponse>;
  reset: () => void;
}

export const useMutation = <
  TResponse = unknown,
  TParams = unknown,
  TError = Error
>(
  fn: (params: TParams) => Promise<TResponse>,
  options?: IUseMutationOptions<TResponse, TParams, TError>,
): [IUseMutationStatus<TError>, IUseMutationActions<TResponse, TParams>] => {
  const source: MutationFunction<TResponse, TParams> = (variables: TParams) =>
    fn(variables);

  const {
    error,
    isIdle,
    isLoading,
    isSuccess,
    mutate,
    mutateAsync,
    reset,
  } = reactUseMutation<TResponse, TError, TParams>(source, options);

  const status: IUseMutationStatus<TError> = {
    default: isIdle,
    loading: isLoading,
    success: isSuccess,
    error: error || undefined,
  };

  const actions: IUseMutationActions<TResponse, TParams> = {
    mutate: <(params?: TParams) => void>mutate,
    mutateAsync: <(params?: TParams) => Promise<TResponse>>mutateAsync,
    reset,
  };

  return [status, actions];
};
