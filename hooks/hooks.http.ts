import { useState, useCallback, useEffect } from "react";
const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isOk, setIsOk] = useState(false);
  const [status, setStatus] = useState(200);
  const request = useCallback(
    async (
      url,
      method = "GET",
      body = null,
      headers = {},
      isFormData = false
    ) => {
      setLoading(true);
      try {
        if (body && !isFormData) {
          body = JSON.stringify(body);
        }

        const response = await fetch(url, { method, body, headers });
        let data;
        if (
          response.headers.get("Content-Type").indexOf("application/json") !==
          -1
        )
          data = await response.json();
        else {
          data = response.text();
        }
        setStatus(response.status);
        if (!response.ok) {
          throw new Error(
            data.message || JSON.stringify(data) || "Что-то пошло не так"
          );
        } else {
          setIsOk(true);
        }
        if (data.success) {
          setSuccess(data.success);
        }
        setLoading(false);
        return data;
      } catch (e) {
        setLoading(false);
        setError(e.message);
        throw e;
      }
    },
    []
  );
  const clearError = () => setError(null);
  const clearSuccess = () => setSuccess(null);
  return {
    loading,
    request,
    error,
    clearError,
    success,
    clearSuccess,
    isOk,
    status,
  };
};
export default useHttp;
