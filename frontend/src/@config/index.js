import axios from "axios";
import nookies, { parseCookies } from "nookies";

const cookies = parseCookies();

const CONSTANTS = {
    BASEURL: "http://localhost:8000/"
}


export const PublicAxios = axios.create({
    baseURL: CONSTANTS.BASEURL
})

export const PrivateAxios = axios.create({
    baseURL: CONSTANTS.BASEURL
})



// jwt token
PrivateAxios.interceptors.request.use(function (config) {
    // logic
    console.log("Token = ", cookies);
    config.headers.Authorization = cookies.token;
    return config;
}, function (error) {
    return Promise.reject(error);
});
