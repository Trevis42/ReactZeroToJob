import { useState, useEffect } from 'react';

export const useFetch = url => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const abortController = new AbortController();

      setLoading(true);
      try {
        const response = await fetch(url, { signal: abortController.signal });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setLoading(false);
        setData(result);
        setError('');
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
        setError(error.message);
      }
    };
    fetchData();

    return () => abortController.abort();
  }, [url]);

  return { data, loading, error };
};
