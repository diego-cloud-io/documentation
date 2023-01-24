---
sidebar_position: 4
title: "Security"
---

# Security

Diego provisions strong foundations for security for your AWS EKS cluster. Using a CloudFormation [stack](https://github.com/diego-cloud-io/diego-tooling-template/blob/main/aws/diego-base-cf-stack.yaml) Diego installs a number of [AWS IAM](https://aws.amazon.com/iam/) (Identity and Access Management) resources detailed below.

## Conforming to AWS Best Practices

Diego conforms to a set of [AWS security best practices](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html):
- [AWS IAM roles](https://aws.amazon.com/iam/features/manage-roles/#:~:text=AWS%20Identity%20and%20Access%20Management%20(IAM)%20roles%20are%20entities%20you,scoped%20by%20those%20IAM%20roles.) are assigned specific permissions that allow trusted identities to perform actions in AWS. These roles are given "least-privilege" permissions to perform tasks. 
- [AWS IAM policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html) are setup with specific permissions and assigned to roles.

### IAM Roles

| IAM role | Purpose |
|---|---|
| `DiegoAppControllerRole` | Assumed by the Diego Application Controller using IRSA. Role assumption is restricted to just the service account being used by the controller. Used to create ECR repositories for your Diego enabled applications. |
| `DiegoCIRole` | Assumed by Diego's Continuous Integration (CI) workflow running in your application repo. The GitHub workflow uses [Github OIDC (OpenID Connect)](https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect) to assume this role. It is used to push build artefacts to ECR. Short-lived OIDC tokens for accessing AWS account resources are constrained to only come from your GitHub organization. |
| `DiegoApiRole` | Assumed by the Diego API using [IRSA](https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/setting-up-enable-IAM.html). Role assumption is restricted to just the service account being used by the API. It is used by the API to create and manage ECR repositories and AWS Systems Manager secrets for your Diego applications. |
| `DiegoDnsControllerRole` | This role is assumed by the [External DNS Controller](https://github.com/kubernetes-sigs/external-dns) using IRSA. Role assumption is restricted to just the service account being used by the controller. The role supports automated management of your Diego Route53 hosted zone. | 
| `DiegoLBControllerRole`  | This role is assumed by [AWS Load Balancer Controller](https://docs.aws.amazon.com/eks/latest/userguide/aws-load-balancer-controller.html) using IRSA. Role assumption is restricted to just the service account being used by the controller. The role is used to create and manage AWS Elastic Load Balancers to support ingress for your Diego enabled applications. |
| `DiegoAppSecretsReaderRole [Preview\|Staging\|Production]`  | These roles are assumed by the [External Secrets Operator](https://external-secrets.io/) using [IRSA](https://docs.aws.amazon.com/eks/latest/userguide/iam-roles-for-service-accounts.html). Role assumption is restricted to just the service accounts being used by the External Secrets Operator. The roles are used to fetch secrets required by your Diego enabled applications running in preview, staging and production environments. |

### IAM Policies

| IAM Policy | Assigned To | Purpose |
|---|---|---|
| `diego-ci` | `DiegoCIRole` | Allows interactions with AWS Elastic Container Repository (ECR), for container image upload and retrieval your applications. |
| `diego-manage-secrets`   | `DiegoApiRole` | Allows full management of parameters in [AWS Systems Manager Parameter Store](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html)<br/>Allows [`route53:ChangeResourceRecordSets`](https://docs.aws.amazon.com/Route53/latest/APIReference/API_ChangeResourceRecordSets.html) for your Route53 hosted zone. |
| `diego-manage-zone` | `DiegoDnsControllerRole` | Allows management of the Route53 hosted zone that was set up for your Diego applications, e.g. `diego.<your-organisation's-domain>.com` |
| `diego-manage-alb` | `DiegoLBControllerRole` | Allows various permissions related to managing an AWS ELB on behalf of Diego and your Diego enabled applications. For example, creation and deletion of an ALB and listeners within it. |
| `diego-[preview\|staging\|production]-secret-access` | `DiegoAppSecretsReader<env>` | Allows reading of AWS Systems Manager Parameter Store secrets constrained to environment specific paths. |
| `diego-create-repository` | `DiegoAppControllerRole` | Allows creation of ECR repositories. |

## Environment Isolation

Diego implements a logical separation of its own components and your application environments using Kubernetes namespaces. Diego does not implement physical separation of your application environments.

## Managing Sensitive Information

Secrets for applications deployed into your EKS cluster are managed via **Diego Hub**. These are stored in the AWS Systems Manager Parameter Store. Secrets are stored as the type `SecureString`, and are encrypted with the default AWS managed KMS encryption key. Further information on this is provided [here](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html)

Separately, secrets for the Diego software are only stored as Kubernetes secrets and your local Diego CLI config file. Installing Diego CLI creates the config file `$HOME/.diego/config` which is updated as `init` commands are run with Diego CLI. 

## Network Configuration

Diego CLI requires various network configuration has prerequisites, so Diego can be deployed into your AWS EKS cluster. Network requirements for AWS EKS are provided [here](https://docs.aws.amazon.com/eks/latest/userguide/network_reqs.html).

## Public Resources

A Diego installation creates the following public resources:

- An internet facing AWS ELB Application Load Balancer with listeners for:
    - Diego Hub
    - Dex
    - Argo CD
- A public Route53 hosted zone for your Diego sub-domain