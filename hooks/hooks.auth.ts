import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/router";

const storageName = "4GeekUserData";
const useAuth = () => {
  const [token, setToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  const router = useRouter();
  const login = useCallback((jwtToken, refresh) => {
    setToken(jwtToken);
    setRefreshToken(refresh);
    localStorage.setItem(
      storageName,
      JSON.stringify({ refreshToken: refresh, token: jwtToken })
    );
  }, []);

  const logout = useCallback(async () => {
    setToken(null);
    setRefreshToken(null);
    localStorage.removeItem(storageName);
    await router.push("/");
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName));
    if (data && data.token) {
      login(data.token, data.refreshToken);
    }
  }, [login]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName));
    if (data && data.token) {
      setToken(data.token);
      setRefreshToken(data.refreshToken);
    }
  }, []);

  return { login, logout, token, refreshToken };
};
export default useAuth;
