import { createContext, useContext, useState } from "react";
import axios from "axios";

const AuthenContext = createContext({ token: localStorage.getItem("token") });

export function AuthenProvider({ children }) {
  const [token, setToken] = useState(null);

  function register(form) {
    axios
      .post(
        "https://us-central1-experiment-49e67.cloudfunctions.net/api/auth/register",
        form
      )
      .then((response) => {
        setToken(response.data.data.token);
        localStorage.setItem("token", response.data.data.token);
      });
  }

  function login(form) {
    axios
      .post(
        "https://us-central1-experiment-49e67.cloudfunctions.net/api/auth/accessToken",
        form
      )
      .then((response) => {
        setToken(response.data.data.token);
        localStorage.setItem("token", response.data.data.token);
      });
  }

  function logout() {
    setToken(null);
  }

  const value = {
    register,
    logout,
    login,
    token,
  };

  return (
    <AuthenContext.Provider value={value}>{children}</AuthenContext.Provider>
  );
}

export const useAuthen = () => useContext(AuthenContext);
