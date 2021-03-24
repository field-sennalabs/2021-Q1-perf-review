import axios from "axios";

function useAuthen() {
  function setToken(data) {
    localStorage.setItem("token", data);
  }

  function getToken() {
    return localStorage.getItem("token");
  }

  function register(form) {
    axios
      .post(
        "https://us-central1-experiment-49e67.cloudfunctions.net/api/auth/register",
        form
      )
      .then((response) => {
        setToken(response.data.data.token);
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
      });
  }

  return {
    register,
    login,
    getToken,
  };
}

export default useAuthen;
