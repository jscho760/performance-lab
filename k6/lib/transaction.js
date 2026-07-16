import { Trend } from "k6/metrics";

const trx = new Trend("transaction");

export function transaction(name, fn) {

    const start = Date.now();

    const result = fn();

    trx.add(Date.now() - start, {
        transaction: name
    });

    return result;

}
