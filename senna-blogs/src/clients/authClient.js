import { httpClient } from "./httpClient";

async function register(data) {
  console.log(data);
  return await httpClient.post("auth/register", data);
}

async function login(data) {
  const response = await httpClient.post("auth/accessToken", data);
  const { token } = response.data.data;
  setAccessToken(token);
  return response;
}

function setAccessToken(token) {
  localStorage.setItem("senna:accessToken", token);
}

export default {
  register,
  login
};
