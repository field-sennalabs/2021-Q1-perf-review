import { useState } from "react";
import axios from "axios";
import { useAuthen } from "./useAuthen";

export function useBlogs() {
  const { token } = useAuthen();
  const [data, setData] = useState([]);

  function getBlogs() {
    axios
      .get(
        "https://us-central1-experiment-49e67.cloudfunctions.net/api/blogs?author&after"
      )
      .then((response) => {
        setData((prevData) => response.data.data);
      });
  }

  function createBlog(form) {
    axios
      .post(
        "https://us-central1-experiment-49e67.cloudfunctions.net/api/blogs",
        form,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((response) => {
        console.log(response);
      });
  }

  return {
    data,
    getBlogs,
    createBlog,
  };
}
