import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 5,
  duration: '1m',
};

export default function () {
  const res = http.get('https://test.k6.io');

  if (res.status !== 200) {
    console.error(`Failed: ${res.status}`);
  }

  sleep(1);
}
