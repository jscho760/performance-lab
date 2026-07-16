import { SharedArray } from 'k6/data';

const csvData = new SharedArray('users', function () {

    // 다음 단계에서 CSV Parser를 연결할 예정
    return [
        { userId: "user001", password: "pass001" },
        { userId: "user002", password: "pass002" },
        { userId: "user003", password: "pass003" },
        { userId: "user004", password: "pass004" },
        { userId: "user005", password: "pass005" }
    ];

});

export default csvData;
