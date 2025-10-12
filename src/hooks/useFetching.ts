import { useState } from 'react';

type FetchingCallback = () => Promise<void>;

type UseFetchingReturn = [fetching: () => Promise<void>, loading: boolean, error: string];

export const useFetching = (callback: FetchingCallback): UseFetchingReturn => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const fetching = async (): Promise<void> => {
    try {
      setLoading(true);
      await callback();
    } catch (e: unknown) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError('Unknown error');
      }
    } finally {
      setLoading(false);
    }
  };

  return [fetching, loading, error];
};
