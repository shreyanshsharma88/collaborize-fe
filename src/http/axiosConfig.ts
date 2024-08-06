import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import { BASE_URL } from "../utils";
import { toast } from "react-toastify";

export const authAxios = axios.create({
  baseURL: BASE_URL,
});

const requestInterceptor = (config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["auth-token"] = token;
  }
  return config;
};

const responseInterceptor = async (error: AxiosError) => {
  if (error.status === 401) {
    // TODO: WRITE AN ACTUAL LOGOUT FN
    toast("Not Authorized");
    localStorage.removeItem("token");
  }
  if (error.status === 500) {
    toast("something went wrong")
    console.log("Internal Server Error");
  }
  return Promise.reject(error);
};
authAxios.interceptors.request.use(requestInterceptor);
authAxios.interceptors.response.use(undefined, responseInterceptor);
