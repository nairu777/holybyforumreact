import axios from "axios";

export const publicAxios = axios.create({
    baseURL: "http://192.168.0.103:81/holybeforumapi/holybeforumapi/public/api",
    //baseURL: "http://localhost:81/holybeforumapi/holybeforumapi/public/api",
    headers: {
        "Content-type": "application/json",
    }
});

export const authAxios = axios.create({
    baseURL: "http://192.168.0.103:81/holybeforumapi/holybeforumapi/public/api",
    //baseURL: "http://localhost:81/holybeforumapi/holybeforumapi/public/api",
    headers: {
        "Content-type": "application/json",
        Authorization:'Bearer ' + localStorage.getItem('loginToken')
    }
});