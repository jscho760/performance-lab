import http from 'k6/http';
import { check } from 'k6';
import { BASE_URL } from './config.js';

export function getProducts(token) {

    const res = http.get(
        `${BASE_URL}/products`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    check(res, {
        "Product List": (r) => r.status === 200
    });

    return res.json();
}
