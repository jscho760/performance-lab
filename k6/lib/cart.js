import http from 'k6/http';
import { BASE_URL } from './config.js';

export function addCart(token) {

    return http.post(
        `${BASE_URL}/cart`,
        "{}",
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

}
