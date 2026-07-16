import { sleep } from "k6";

export function think(sec = 1) {
    sleep(sec);
}
