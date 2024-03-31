import axios from "axios";

const URL = "https://rickandmortyapi.com/api";

export const axiosInstance = axios.create({
  baseURL: URL,
});
