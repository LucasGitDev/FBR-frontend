import axios from "axios";
import pecas from "../assets/pecas_teste";

export default class Api {
  static api = axios.create({
    baseURL: `http://localhost:3333/`,
  });

  static getPecas() {
    return this.api.get(`/pecas`).then((response) => {
      return response.data;
    }).catch((error) => {
      console.log(error);
      return pecas;
    });
  }


  static async searchPecas(search) {
    const response = await this.api.get(`/pecas/search?search=${search}`);
    console.log(response.data);
    return response.data;
  }
}
