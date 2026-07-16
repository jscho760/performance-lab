import http from "k6/http";
import { BASE_URL } from "../config/config.js";

export function login() {
    return http.get(`${BASE_URL}/`);
}
