import axios from "axios";
const queryParams = new URLSearchParams();
queryParams.append("location","Kyiv")
queryParams.append("price","8500")


const stringParams = queryParams.toString()
console.log(queryParams)
const urla = `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers?${stringParams}`
console.log(urla)
export const campApi = axios.create({
  baseURL: urla,
});
