import { httpClient } from "./httpClient";

async function createBlog(data) {
  return await httpClient.post("blogs", data);
}

export default {
  createBlog
};
