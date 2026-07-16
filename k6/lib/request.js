import http from "k6/http";

export function GET(url, params = {}) {
    return http.get(url, params);
}

export function POST(url, body, params = {}) {
    return http.post(url, body, params);
}

export function PUT(url, body, params = {}) {
    return http.put(url, body, params);
}

export function DELETE(url, params = {}) {
    return http.del(url, null, params);
}
