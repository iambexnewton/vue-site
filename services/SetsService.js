import axios from "axios";

export class SetsService {
  static serverURL = "http://localhost:9900";

  static getAllSets() {
    let dataURL = `${this.serverURL}/userSets`;
    return axios.get(dataURL);
  }
  static getSingleUserSet() {
    let dataURL = `${this.serverURL}/userSets/${id}`;
    return axios.get(dataURL);
  }
  static getAllGroups() {
    let dataURL = `${this.serverURL}/groups`;
    return axios.get(dataURL);
  }

  static createSet(set) {
    let dataURL = `${this.serverURL}/userSets/`;
    return axios.post(dataURL, set);
  }
  static editSet(set, id) {
    let dataURL = `${this.serverURL}/userSets/${id}`;
    return axios.put(dataURL, set);
  }
  static deleteSet(id) {
    let dataURL = `${this.serverURL}/userSets/${id}`;
    return axios.delete(dataURL);
  }
}
