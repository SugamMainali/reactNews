import axios from "axios";

const instance = axios.create({
  baseURL: "https://news-update-5f281.firebaseio.com/",
});

export default instance;
