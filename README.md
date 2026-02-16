**System Overview**
This project demonstrates a full cloud-native DevOps workflow including:

Containerized microservices
CI/CD automation
Kubernetes deployment
Infrastructure as Code
Observability stack

**Architecture Flow**
Developers
   ↓
Git Repository (GitHub)
   ↓
CI/CD Pipeline
   ↓
Build • Test • Security Scan
   ↓
Docker Image Registry
   ↓
Helm Deployment
   ↓
Kubernetes Cluster
   ├── Frontend Service
   ├── Backend API Service
   └── Database Service
   ↓
Ingress + Load Balancer
   ↓
End Users
