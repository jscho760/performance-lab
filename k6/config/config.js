export const BASE_URL = "https://test.k6.io";

export const OPTIONS = {
    smoke: {
        vus: 5,
        duration: "30s",
    },
    load: {
        vus: 20,
        duration: "2m",
    },
    stress: {
        stages: [
            { duration: "2m", target: 50 },
            { duration: "3m", target: 100 },
            { duration: "2m", target: 0 },
        ],
    },
};
