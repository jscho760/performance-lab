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

    const user = users[__VU % users.length];

    //const token = login("jscho", "1234");
    const token = login(user.userId, user.password);

     sleep(3);
     
     getProducts(token);

    sleep(2);

    addCart(token);

    sleep(5);

    order(token);

}
