import httpClient from "./httpClient";

const register = async (data) => {
  console.log("regis", data);
  return await httpClient.post("auth/register", data);
};


export default {
  register
}