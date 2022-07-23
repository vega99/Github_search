import axios from "axios";

const USER_URL = "https://api.github.com/search/users";
const REPOSITORY_URL = "https://api.github.com/users";

// Como  es una ejemplo y el token expira en 7 días,  lo pongo aquí, de otra manera pondría en variables
// de entorno
export const TOKEN = "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";

export const userSearch = axios.create({
    baseURL: USER_URL,
    method: "GET",
    headers: {
        "Content-type": "application/json",
    },
});

export const respositorySeach = axios.create({
    baseURL: REPOSITORY_URL,
    method: "GET",
    headers: {
        "Content-type": "application/json",
    },
});
