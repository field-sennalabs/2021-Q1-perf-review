import axios from "axios";

function getAccessToken() {
  return localStorage.getItem("blogs:accessToken");
}


const httpClient = axios.create({
  baseURL: "https://us-central1-experiment-49e67.cloudfunctions.net/api/",
});

httpClient.interceptors.request.use(
  (config) => {
    const accessToken = getAccessToken();
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default httpClient;