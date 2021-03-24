import { httpClient } from "./httpClient";

async function createBlog(data) {
  return await httpClient.post("blogs", data);
}

async function getBlogs() {
  const { data } = await httpClient.get("blogs");

  return data;
}

export default {
  createBlog,
  getBlogs
};
