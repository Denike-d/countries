import axios from "axios";

export const getCountries = axios.create({
  baseURL: `https://restcountries.com/v3.1/`,
});
