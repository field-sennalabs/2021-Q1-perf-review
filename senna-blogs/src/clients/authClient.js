import { httpClient } from "./httpClient";

async function register(data) {
  console.log(data);
  return await httpClient.post("auth/register", data);
}

async function login(data) {
  return await httpClient.get("auth/accessToken", data);
}

export default {
  register,
  login
};
