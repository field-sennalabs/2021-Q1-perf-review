import axios from "axios";
import useAuthen from "./useAuthen";

function useBlog() {
  const { getToken } = useAuthen();
  console.log("token: ", getToken());
  axios
    .get(
      "https://us-central1-experiment-49e67.cloudfunctions.net/api/blogs?author&after"
    )
    .then((response) => {
      console.log(response);
    });

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
    data: [],
    createBlog,
  };
}

export default useBlog;
