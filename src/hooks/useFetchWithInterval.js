import { useEffect, useState } from "react";

export const useFetchWithInterval = (url, interval = 5000) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let timeout;
    async function fetchData(url) {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
      timeout = setTimeout(() => fetchData(url), interval);
    }

    fetchData(url);

    return () => clearTimeout(timeout);
  }, [url, interval]);

  return [data, loading, error];
};
