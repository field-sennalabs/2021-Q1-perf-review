import httpClient from "./httpClient";

const getBlogs = async (data) => {
  return await httpClient.get("blogs", data);
};

const getBlogBySlug = async (data) => {
  return await httpClient.get(`blogs/${data.slug}`, data);
};

const postBlog = async (data) => {
  return await httpClient.post("blogs", data);
};

const patchBlog = async (data) => {
  return await httpClient.patch("blogs", data);
};

const deleteBlog = async (data) => {
  return await httpClient.delete(`blogs/${data.slug}`);
};
export default {
  getBlogs,
  getBlogBySlug,
  postBlog,
  patchBlog,
  deleteBlog,
};
