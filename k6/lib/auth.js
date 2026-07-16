import http from 'k6/http';
import { check } from 'k6';
import { BASE_URL } from './config.js';

export function login(userId, password) {

    const res = http.post(
        `${BASE_URL}/login`,
        JSON.stringify({
            userId,
            password
        }),
        {
            headers: {
                "Content-Type": "application/json"
            }
        }
    );

    check(res, {
        "Login Success": (r) => r.status === 200
    });

    return res.json().token;
}

export function getAccessToken(res) {
    return res.json("accessToken");
}

export function getRefreshToken(res) {
    return res.json("refreshToken");
}

export function getUserId(res) {
    return res.json("userId");
}
