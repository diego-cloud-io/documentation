---
sidebar_position: 2
---

# Diego Core Pack Overview 

Diego Core pack provides all the necessary foundations needed for implementing a high performance software development process. These foundations are installed onto a Kubernetes cluster.

The **Diego Core Pack** installation deploys 2 broad categories of software into your AWS Kubernetes cluster; **open source tooling components** and **diego custom components**. 

## Open source tooling components

The primary open source tool at heart of Diego is [Argo CD](https://argo-cd.readthedocs.io/en/stable/).  Argo CD is a declarative, GitOps continuous delivery tool for Kubernetes. Some of the secondary tooling deployed are: 

- [AWS Load Balancer Controller plugin for Kubernetes](https://kubernetes-sigs.github.io/aws-load-balancer-controller/v2.4/) <br/>
&nbsp; &nbsp; ○ Helps manage Elastic Load Balancers for a Kubernetes cluster.

- [External DNS](https://github.com/kubernetes-sigs/external-dns) <br/>
&nbsp; &nbsp; ○ Enables Diego to do URL manage URL structuring the assigned delegated zone and  Synchronizes exposed Kubernetes Services and Ingresses with DNS providers.

- [Dex](https://github.com/dexidp/dex) <br/>
&nbsp; &nbsp; ○ Dex is an identity service that uses OpenID Connect to drive authentication for other apps.

- [external secret operator](https://external-secrets.io/v0.7.0/) <br/>
&nbsp; &nbsp; ○ Reads secrets from external APIs with secret providers and automatically injects the values into a into Kubernetes secret.


## Diego custom components

This consists of custom Diego components:

### Application controller

This is an orchestrator for managing the application state in GitHub and automates the developer process for deploying applications into different route-to-live environments, including short-lived ephemeral preview environments. 
This is further used used by Argo CD to synch to the target cluster. 

### API

This component provides the grapghql endpoint for extracting application deployment information from the cluster. This information is then displayed on an easy-to-use front-end called **Diego Hub**. 

### Hub

Serves as the front-end platform, where you can monitor deployments for applications managed by Diego. 




--- TBD

● [git](https://git-scm.com/)

● [Helm](https://helm.sh/)

● [GitHub](https://github.com/)

● [Github Actions for CI pipelines](https://github.com/features/actions)

● Managed [Kubernetes](https://kubernetes.io/) - provided by [AWS EKS](https://aws.amazon.com/eks/)
