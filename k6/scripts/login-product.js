import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 5,
  duration: '30s',
};

export default function () {

  // Login
  const loginRes = http.post(
    'http://localhost:8080/login',
    JSON.stringify({
      userId: 'jscho',
      password: '1234'
    }),
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );

  check(loginRes, {
    'login success': (r) => r.status === 200,
  });

  // Correlation
  const token = loginRes.json().token;

  // Product 조회
  const productRes = http.get(
    'http://localhost:8080/products',
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  check(productRes, {
    'product success': (r) => r.status === 200,
  });

  sleep(1);
}