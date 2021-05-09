import axios from "axios";

export const publicAxios = axios.create({
    baseURL: "http://localhost:81/holybeforumapi/holybeforumapi/public/api",
    headers: {
        "Content-type": "application/json",
    }
});

export const authAxios = axios.create({
    baseURL: "http://localhost:81/holybeforumapi/holybeforumapi/public/api",
    headers: {
        "Content-type": "application/json",
        Authorization:'Bearer ' + localStorage.getItem('loginToken')
    }
});