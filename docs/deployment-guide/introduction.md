---
sidebar_position: 1
title: "Introduction"
---

# Introduction

Diego is an integrated platform which streamlines the software development process for easier management of application deployments. It reduces cycle times for delivering change to production.

Diego extends the standard Kubernetes API with custom resources that represent your deployed applications and environments. The Diego control plane reconciles these resource as applications running in your cluster. 

Diego implements a GitOps approach for synchronizing the definition of your applications and environments in GitHub with running deployments in your EKS cluster. 

As well as it's own components running in your cluster, Diego is integrated with other AWS services to provide the overall functionality of the system.

- [EKS](https://aws.amazon.com/eks/)
- [IAM](https://aws.amazon.com/iam/)
- [Route53](https://aws.amazon.com/route53/)
- [CloudWatch](https://aws.amazon.com/cloudwatch/)
- [ALB (Application Load Balancer)](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html)
- [Systems Manager Parameter Store](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html)

## Use Cases
Once installed, Diego enables a number of application development use cases:

- Creation of new Diego enabled applications
- Management or onboarding of existing applications to Diego
- Automatic creation and tear down of ephemeral preview environments for a Diego enabled application
- Selective deployment of Diego enabled application versions to staging and production environments
- Flexible declaration of the dependencies required in a preview environment
- Management and retrieval of application secrets
- Declaration and approval of gates to control deployment of new versions of your applications

## Deployment Overview

Diego is typically installed into a single-region, multi-AZ (multi availability-zone) pre-provisioned EKS cluster. Your deployed applications run in the same cluster, using Kubernetes namespaces to maintain isolation from Diego.

Diego can be installed in any AWS region.

:::info
The total expected time to install Diego is 1 hour (assuming [prerequisites and requirements](#prerequisites-and-requirements) have been met)
:::

### EKS Deployments
In addition to extending the Kubernetes API, Diego is composed of a number of integrated components deployed into your cluster.

| Deployment | Purpose     |
| ----------- | ----------- |
| Diego Application Controller | The Diego control plane managing Diego applications, environments and versions |
| Diego Hub | An easy-to-use interface to manage applications and review deployments to different environments |
| Diego API | Used by the Diego Hub |
| OAuth2 Proxy | Authentication gateway for the Diego Hub and API |
| ArgoCD | GitOps deployment controller doing the work of synchronising your application and environment definitions to your EKS cluster |
| Dex | OIDC proxy to your GitHub organisation identity provider |
| AWS Load Balancer Controller | Ingress controller for Diego components and your Diego enabled applications |
| DNS Controller | DNS management for Diego components and your Diego enabled applications |
| External Secrets Operator | Creates K8s secrets for you applications based on secrets stored in AWS SSM ParameterStore |
| Cert Manager Controller | Adds certificates and certificate issuers as resource types in Kubernetes clusters, and simplifies the process of obtaining, renewing and using those certificates. |

### AWS Services and Resources
After installation the following AWS resources will have been created or configured in your AWS account.

| Service     | Description |
| ----------- | ----------- |
| IAM Roles & Policies | Roles and policies for use by Diego installed controllers, operators and deployments. Accessed via IAM roles for service accounts (IRSA) |
| IAM OIDC Providers   | For AWS STS to validate OIDC tokens presented on role assumption from EKS service accounts as part of IRSA and same for GitHub workflows running in your Diego enabled application repos in your GitHub organisation |
| Route53 Hosted Zone | A subdomain of your organisation's domain where DNS records for your Diego enabled applications are created and managed |
| ACM Certificate | A wildcard certificate for your Diego subdomain. Used by AWS ALB for TLS based ingress to your Diego enabled applications |
| Application Load Balancer | Manages listeners on the Diego ALB for all ingress to public facing Diego components and your Diego enabled applications  |
| AWS Systems Manager Parameter Store | Used to store secrets for your Diego enabled applications |

### GitHub Application and Repositories

Diego installation creates the following resources in your GitHub organisation.

| Name | Resource Type | Purpose |
|------| ------------- | ----------- |
| `diego-<organisation name>-bot` | GitHub App | Used during Diego installation and then during normal operation by the Diego API and Diego Application Controller to create and manage repositories in your GitHub organisation |
| `diego-tooling` | Repository | Declaration of your deployed Diego installation, created at installation time | 
| `diego-default-project` | Repository | Declaration of your application environments, created at installation time and managed by the Diego control plane | 

## Prerequisites and Requirements

Before starting the Diego deployment please ensure the following pre-requisites are in place.

### Technical

1. An AWS Account and access to an IAM user or role with `AdministratorAccess` permissions.

2. A VPC with at least 2 private subnets and 1 pubic subnet. Plus:
    - Internet Gateway attached to the VPC
    - NAT Gateway running in the public subnet
    - Routing between private and public subnets
    - Routing between public subnet and the internet gateway

3. A pre-provisioned EKS cluster associated with the private subnets in your VPC:
    - AWS EKS cluster version: `v1.24`
    - Access to an IAM user or role that has `cluster-admin` or `system:masters` permissions in your EKS cluster
    - With public endpoint access enabled
    - Your EKS instance should be provisioned to meet the prerequisites defined in the AWS EKS documentation for [setting up an EKS cluster](https://docs.aws.amazon.com/eks/latest/userguide/create-cluster.html)    

4. An EKS managed node group in that cluster containing at least 1 x `t3.large EC2` instance.

5. The VPC private subnets containing the EKS managed node must be tagged as below. This is to support discovery by the AWS Load Balancer Controller.

    | Tag Key | Tag Value |
    |---|---|
    |`kubernetes.io/role/elb`|`1`|

6. A GitHub organisation and access to a user with administrator privileges on that organisation.

7. A domain you own and can manage, under which you can host sub-domains containing Diego installed components and also your Diego managed environments and applications. For example, if `acme.com` is your organisation's domain then the following new sub-domain is created as part of the installation.

    | Domain | Purpose | Example |
    |---|---|---|
    | `acme.com` | Managed by you in your domain host e.g. GoDaddy | |
    | `diego.acme.com` | New sub-domain created by the installation and will contain Diego components and your customer applications | `hub.diego.acme.com`<br/><br/>`staging-testapp.diego.acme.com` |

8. Local tools to support the installation process.

    | Tool | Version | Notes |
    |---|---|---|
    | [Diego CLI](https://cli.diegocloud.io) | latest version | required, [install instructions](#architecture) |    
    | [Helm](https://helm.sh/docs/intro/install) | v3 | required |    
    | [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl-macos/) | matching your EKS version | required | 
    | [aws-vault](https://github.com/99designs/aws-vault) | any | optional<sup>*</sup> |

    <sup>*</sup>aws-vault is used to set AWS security credentials required by some Diego CLI commands. Credentials can be set without using aws-vault.
    
### Skills and Specialised Knowledge

- A reasonable level of experience and understanding of AWS IAM, EKS, Kubectl, GitHub and basic command line skills (to run CLI commands) is required to complete the deployment of Diego into your AWS account.

### Specific Configuration

## Architecture
![](./images/Diego%20APN%20Architecture%20Diagram.png)

## Installing the Diego CLI

Download and unpack the latest Diego CLI for your operating system. In all cases you may want to add the resulting `diego` CLI executable to your shell's path for making invoking it easier.

- **MacOS**

    Download the CLI, ensure you choose the correct [distribution](https://cli.diegocloud.io).
    ```
    curl "https://cli.diegocloud.io/releases/v0.1.0/darwin-x86_64.tar.gz" -o "diego-cli.tar.gz"
    ```

    Unpack the download:
    ```
    tar -xvf "diego-cli.tar.gz"
    ```

    Make the binary executable:
    ```
    chmod u+x diego
    ```

    Confirm the CLI works by checking the version you are running:
    ```
    ./diego --version

    diego version 0.1.0
    ```

- **Linux**

    Download the CLI, ensure you choose the correct [distribution](https://cli.diegocloud.io).
    ```
    curl "https://cli.diegocloud.io/releases/v0.1.0/linux-x86_64.tar.gz" -o "diego-cli.tar.gz"
    ```

    Unpack the download:
    ```
    tar -xvf "diego-cli.tar.gz"
    ```

    Make the binary executable:
    ```
    chmod u+x diego
    ```

    Confirm the CLI works by checking the version you are running:
    ```
    ./diego --version

    diego version 0.1.0
    ```
    