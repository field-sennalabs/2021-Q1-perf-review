import { useState } from "react";
import axios from "axios";
import useAuthen from "./useAuthen";

function useBlog() {
  const { getToken } = useAuthen();
  const [data, setData] = useState([]);

  function getBlog() {
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
            Authorization: "Bearer " + getToken(),
          },
        }
      )
      .then((response) => {
        console.log(response);
      });
  }

  return {
    data,
    getBlog,
    createBlog,
  };
}

export default useBlog;
