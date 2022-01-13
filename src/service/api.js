import axios from "axios";

export default class Api {
  static api = axios.create({
    baseURL: `http://localhost:3333/`,
  });

  static get(url) {
    return this.api.get(url);
  }
}
