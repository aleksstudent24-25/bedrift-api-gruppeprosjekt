import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://data.brreg.no/enhetsregisteret/api/enheter",
  timeout: 10000,
});

export default axiosInstance;
