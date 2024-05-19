import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url, options = { initialFetch: true, initialData: [] }) => {
  const [data, setData] = useState(options.initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      if (!options.initialFetch) return;

      setLoading(true);
      try {
        const res = await axios.get(url, { signal: controller.signal });
        setData(res.data);
        setError(null);
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log("Fetch canceled");
        } else {
          setError(err);
        }
      }
      setLoading(false);
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [url, options.initialFetch]);

  const reFetch = async () => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      setData(res.data);
      setError(null);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  return { data, loading, error, reFetch };
};

export default useFetch;
