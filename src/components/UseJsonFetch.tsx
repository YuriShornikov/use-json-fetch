import { useState, useEffect } from "react";

interface FetchOptions {
  method?: string;
  headers?: { [key: string]: string };
  body?: string;
}

export function useJsonFetch(url: string, opts?: FetchOptions): [any, boolean, any] {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url, opts);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, opts]);

  return [data, loading, error];
}
