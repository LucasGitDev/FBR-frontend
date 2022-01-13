import axios from "axios";
import pecas from "../assets/pecas_teste";

export default class Api {
  static api = axios.create({
    baseURL: `http://localhost:3333/`,
  });

  static getPecas(url) {
    let resp = pecas
    try {
      this.api.get('/pecas').then((response) => {
        resp =  response.data;
      });
    } catch (error) {
      console.log(error);
    }

    return resp;
  }


  static searchPecas(search) {
    return this.api.get(`/pecas/search?search=${search}`).then((response) => {

      console.log(response.data);
      return response.data;
    });
  }
}
