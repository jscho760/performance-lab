import { check } from "k6";

export function status200(res) {

    check(res, {
        "status == 200": r => r.status === 200
    });

}
