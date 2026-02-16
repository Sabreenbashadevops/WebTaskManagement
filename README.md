# WebTaskManagement
cloud-native Task Management Web Application

High level architecture
                ┌──────────────────────┐
                │     Developers       │
                └──────────┬───────────┘
                           │ Git Push
                           ▼
                ┌──────────────────────┐
                │   Git Repository     │
                └──────────┬───────────┘
                           │ Trigger CI/CD
                           ▼
                ┌──────────────────────┐
                │    CI/CD Pipeline    │
                │ Build • Test • Scan  │
                └──────────┬───────────┘
                           │ Docker Images
                           ▼
                ┌──────────────────────┐
                │   Container Registry │
                └──────────┬───────────┘
                           │ Helm Deploy
                           ▼
                ┌────────────────────────────┐
                │        Kubernetes Cluster  │
                │  Frontend • Backend • DB   │
                └──────────┬─────────────────┘
                           │
                           ▼
                ┌────────────────────────────┐
                │ Load Balancer + Ingress    │
                └──────────┬─────────────────┘
                           │
                           ▼
                        End Users


   Monitoring Stack: Prometheus → Grafana
   Logging Stack: Elastic Stack
   Infra Provisioning: Terraform
