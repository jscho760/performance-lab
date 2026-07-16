import { GET } from "../lib/request.js";

const BASE="https://test.k6.io";

export function member(){

    return GET(BASE);

}
