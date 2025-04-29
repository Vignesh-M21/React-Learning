import { useCallback, useState } from "react";

export function useLazyFetch(fetcher, dataSetter) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetcherLazy = useCallback(
    (...args) => {
      try {
        setLoading(true);
        fetcher?.(...args).then((data) => {
          setData(data);
          dataSetter?.(data);
        });
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    },
    [fetcher, dataSetter]
  );

  return { fetcherLazy, actions: { data, loading, error } };
}
