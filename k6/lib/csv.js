import { SharedArray } from 'k6/data';
import { open } from 'k6/experimental/fs';
import papaparse from 'https://jslib.k6.io/papaparse/5.1.1/index.js';

export const users = new SharedArray('users', () => {
    return papaparse.parse(open('../data/users.csv'), {
        header: true,
    }).data;
});
