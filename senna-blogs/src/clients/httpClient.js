import axios from "axios";

let retryRequestTasks = [];

const httpClient = axios.create({
  baseURL: "https://us-central1-experiment-49e67.cloudfunctions.net/api/"
});

httpClient.interceptors.request.use(config => {
  const accessToken = localStorage.getItem("senna:accessToken");
  const requestConfig = configWithAuthorization(config, accessToken);
  return requestConfig;
});

httpClient.interceptors.response.use(
  response => response,
  error => {
    if (!isAxiosError(error)) {
      return Promise.reject(error);
    }

    if (!isAccessTokenExpired(error)) {
      return Promise.reject(error);
    } else {
      clearToken();
    }

    const retryRequest = retry(error);

    return retryRequest;
  }
);

function configWithAuthorization(config, token) {
  const { headers = {} } = config;
  if (headers.Authorization) {
    return config;
  }

  return { ...config, headers: injectAuthorizationToken(headers, token) };
}

function injectAuthorizationToken(headers, token) {
  return { ...headers, Authorization: `Bearer ${token}` };
}

function isAxiosError(error) {
  const { isAxiosError } = error;

  return isAxiosError;
}

function isAccessTokenExpired(error) {
  return error.config && error.response && error.response.status === 401;
}

function retry(error) {
  return new Promise((resolve, reject) => {
    retryRequestTasks.push(accessTokenOrError => {
      if (typeof accessTokenOrError !== "string") {
        reject(accessTokenOrError);
        return;
      }

      const config = { ...error.config };
      config.headers = injectAuthorizationToken(
        error.config.headers,
        accessTokenOrError
      );

      resolve(httpClient.request(config));
    });
  });
}

function clearToken() {
  clearAccessToken();
}

function clearAccessToken() {
  localStorage.removeItem("senna:accessToken");
}

export { httpClient };
