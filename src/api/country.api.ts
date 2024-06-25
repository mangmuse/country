import axios, { AxiosInstance } from "axios";
import { Countries } from "./country.type";

const BASE_URL = import.meta.env.VITE_COUNTRY_API_URL;

class CountryAPI {
  private client: AxiosInstance;
  private baseURL = BASE_URL;

  constructor() {
    this.client = axios.create({ baseURL: this.baseURL });
  }

  async getCountries() {
    const path = `/all`;
    const res = await this.client.get<Countries>(path);
    const countries = res.data;
    return countries;
  }
}

const countryApi = new CountryAPI();

export default countryApi;
