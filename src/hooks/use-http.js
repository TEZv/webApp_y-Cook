import { useState, useCallback } from "react";

const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const requestHttp = useCallback((requestData, handleResponse) => {
    setLoading(true);
    fetch(requestData.url, {
      method: requestData.method ? requestData.method : "GET",
      headers: requestData.headers ? requestData.headers : {},
      ...(requestData.body && {body: requestData.body})
    })
      .then((response) => {
        if (!response.ok) throw new Error("Something went wrong :\\");
        return response.json();
      })
      .then((data) => {
        handleResponse(data);
      })
      .catch((e) => {
        setError(e.message);
      })
      .finally(() => setLoading(false));
  }, []);

  return {
    loading,
    error,
    requestHttp,
  };
};

export default useHttp;