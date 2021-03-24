import httpClient from "./httpClient";

function setAccessToken(token) {
  localStorage.setItem("blogs:accessToken", token);
}

function clearAccessToken() {
  localStorage.removeItem("blogs:accessToken");
}

const login = async (data) => {
  console.log("login", data);

  const response = await httpClient.post("auth/accessToken", data);
  console.log("response", response);

  setAccessToken(response.data.data.token);
  return response.data.data.token !== "";
};

export default {
  login,
};
