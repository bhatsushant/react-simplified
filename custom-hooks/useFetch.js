import { useEffect, useState } from "react";

export const useFetch = (url, options = {}) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    setData(undefined);
    setError(false);
    setLoading(true);
    const controller = new AbortController();
    fetch(url, { signal: controller.signal, ...options })
      .then((res) => {
        if (res.status === 200 || res.ok) {
          return res.json();
        } else {
          return Promise.reject(res);
        }
      })
      .then((data) => {
        setLoading(true);
        setData(data);
      })
      .catch((e) => {
        if (e?.name === "AbortError") return;
        setError(true);
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });

    return () => {
      setLoading(false);
      controller.abort();
    };
  }, [url]);

  return { data, isLoading, isError };
};
