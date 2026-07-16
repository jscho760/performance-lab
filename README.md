Performance Engineering Lab
=====================================

Performance Testing Platform using

✔ k6
✔ Prometheus
✔ Grafana
✔ Docker
✔ JWT Mock API

-------------------------------------
Architecture
-------------------------------------

            +----------------+
            |      k6        |
            +----------------+
                    |
                    |
        Prometheus Remote Write
                    |
            +----------------+
            | Prometheus     |
            +----------------+
                    |
            +----------------+
            |   Grafana      |
            +----------------+
                    |
             Performance Dashboard

-------------------------------------
Features
-------------------------------------

✔ Load Test

✔ Stress Test

✔ Spike Test

✔ JWT Authentication

✔ REST API

✔ Docker Compose

✔ Real-time Monitoring

-------------------------------------
Project Structure
-------------------------------------

performance-lab/

├── api-server/

├── grafana/

├── prometheus/

├── k6/

│   ├── scripts/

│   ├── scenarios/

│   └── lib/

├── docker-compose.yml

└── README.md

-------------------------------------
How to Run
-------------------------------------

docker compose up -d

k6 run scripts/shopping.js

-------------------------------------
Roadmap
-------------------------------------

Sprint 1
JWT Authentication

Sprint 2
Shopping Scenario

Sprint 3
Prometheus Metrics

Sprint 4
Grafana Dashboard

Sprint 5
CI/CD

Sprint 6
Kubernetes

-------------------------------------
Author
-------------------------------------

Jin Sung Cho

Performance Engineering

25+ Years Experience
