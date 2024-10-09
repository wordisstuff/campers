import axios from "axios";

export const carApi = axios.create({
  baseURL: "https://6705770f031fd46a831011aa.mockapi.io/adverts",
});
