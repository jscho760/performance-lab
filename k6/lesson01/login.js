import http from 'k6/http';

export default function () {

    const payload = JSON.stringify({
        userId:"jscho",
        password:"1234"
    });

    const res = http.post(
        "http://localhost:8080/login",
        payload,
        {
            headers:{
                "Content-Type":"application/json"
            }
        }
    );

    console.log(res.body);

}