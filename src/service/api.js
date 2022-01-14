import axios from "axios";
import pecas from "../assets/pecas_teste";
const url = `https://fbr-sys-backend.herokuapp.com` 
// url = "http://localhost:3333"
export default class Api { 
  static api = axios.create({
    baseURL: url,
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
