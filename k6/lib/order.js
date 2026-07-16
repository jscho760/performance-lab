import http from 'k6/http';
import { BASE_URL } from './config.js';

export function order(token) {

    return http.post(
        `${BASE_URL}/order`,
        "{}",
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

}
