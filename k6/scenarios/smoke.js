import { sleep } from "k6";

import { login } from "../api/login.js";

import { status200 } from "../lib/checks.js";

export default function () {

    let res = login();

    status200(res);

    sleep(1);

}
