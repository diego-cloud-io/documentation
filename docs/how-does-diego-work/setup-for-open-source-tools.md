---
sidebar_position: 5
---

# What Open-Source Tools are used?

Here are some tools used at a high level:

● [git](https://git-scm.com/)

● [Helm](https://helm.sh/)

● [GitHub](https://github.com/)

● [Github Actions for CI pipelines](https://github.com/features/actions)

● Managed [Kubernetes](https://kubernetes.io/) - provided by [AWS EKS](https://aws.amazon.com/eks/)

Here are open source tools deployed as part **Diego-Core** in your Kubernetes cluster as part of a Helm Chart:

● [Argo CD](https://argo-cd.readthedocs.io/en/stable/) > Declarative, GitOps continuous delivery tool for Kubernetes.

● [External DNS](https://github.com/kubernetes-sigs/external-dns) > Synchronizes exposed Kubernetes Services and Ingresses with DNS providers.

● [AWS Load Balancer Controller plugin for Kubernetes](https://kubernetes-sigs.github.io/aws-load-balancer-controller/v2.4/) > Helps manage Elastic Load Balancers for a Kubernetes cluster.

● [Dex](https://github.com/dexidp/dex) > Dex is an identity service that uses OpenID Connect to drive authentication for other apps.

● [external secret operator](https://external-secrets.io/v0.7.0/) > Reads secrets from external APIs with secret providers and automatically injects the values into a into Kubernetes secret.
