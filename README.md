# 🚀 Performance Engineering Lab

A modern Performance Engineering Lab built with Docker, k6, Prometheus and Grafana.

---

## 📌 Overview

This project demonstrates a complete performance testing platform using modern open-source technologies.

### Technology Stack

- k6
- Docker
- Prometheus
- Grafana
- Node.js
- JWT Authentication

---

## 🏗 Architecture

```
              +-------------+
              |     k6      |
              +-------------+
                     |
                     |
      Prometheus Remote Write
                     |
             +---------------+
             | Prometheus    |
             +---------------+
                     |
             +---------------+
             |   Grafana     |
             +---------------+
                     |
              Performance Dashboard
```

---

## 📁 Project Structure

```
performance-lab/

├── api-server/
│
├── grafana/
│
├── prometheus/
│
├── k6/
│   ├── scripts/
│   ├── scenarios/
│   └── lib/
│
├── docker-compose.yml
│
└── README.md
```

---

## 🚀 Getting Started

### Start Environment

```bash
docker compose up -d
```

### Run Load Test

```bash
k6 run scripts/shopping.js
```

---

## 📊 Features

- REST API
- JWT Authentication
- Shopping API
- Performance Test
- Load Test
- Stress Test
- Spike Test
- Docker Compose
- Real-time Monitoring
- Grafana Dashboard

---

## 📅 Roadmap

### Sprint 1

- JWT Authentication

### Sprint 2

- Shopping API

### Sprint 3

- Prometheus Integration

### Sprint 4

- Grafana Dashboard

### Sprint 5

- GitHub Actions

### Sprint 6

- Kubernetes

---

## 👨‍💻 Author

**Jin Sung Cho**

Performance Engineer

25+ Years Experience

Interested in

- Performance Engineering
- Observability
- AI
- Cloud Native
