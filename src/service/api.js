import axios from "axios";
import pecas from "../assets/pecas_teste";

export default class Api {

  url = "https://fbr-sys-backend.herokuapp.com" 
  // url = "http://localhost:3333"
  static api = axios.create({
    baseURL: this.url,
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
    return response.data;
  }
}
