import { sleep } from 'k6';

import { login } from '../lib/auth.js';
import { getProducts } from '../lib/product.js';
import { addCart } from '../lib/cart.js';
import { order } from '../lib/order.js';

export const options = {

    vus: 5,

    duration: '30s'

};

export default function () {

    const token = login("jscho", "1234");

    getProducts(token);

    sleep(1);

    addCart(token);

    sleep(1);

    order(token);

}
