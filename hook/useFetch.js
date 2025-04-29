import { useEffect } from "react";
import { useState } from "react";

export function useFetch(fetcher, dataSetter) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setLoading(true);
      fetcher?.().then((data) => {
        setData(data);
        dataSetter?.(data);
      });
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [fetcher, dataSetter]);
  return { data, loading, error };
}
