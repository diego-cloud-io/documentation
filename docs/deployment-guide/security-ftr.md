---
sidebar_position: 2
title: "Security (FTR)"
---

# Security

Diego's **Core** pack provisions some strong foundations for security for your AWS EKS cluster. As part of AWS setup using Diego CLI, a IaaC AWS Cloudformation stack is provisioned in the AWS account which hosts your EKS cluster. This includes a number of [AWS IAM (Identity and Access Management)](https://aws.amazon.com/iam/) resources. The source code for the CloudFormation stack is available [here](https://github.com/diego-cloud-io/diego-tooling-template/blob/main/aws/diego-base-cf-stack.yaml)

## Conforming to AWS Best Practices

Diego conforms to a set of [AWS security best practices](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html):
- [AWS IAM roles](https://aws.amazon.com/iam/features/manage-roles/#:~:text=AWS%20Identity%20and%20Access%20Management%20(IAM)%20roles%20are%20entities%20you,scoped%20by%20those%20IAM%20roles.) are assigned specific permissions that allow trusted identities to perform actions in AWS. Trusted identities may relate to workloads within or outside AWS and they can grant access to for AWS services. 
- [AWS IAM policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html) are setup with restricted "least-privilege permissions" to perform tasks. 


### List of AWS IAM Roles

| IAM role               | Purpose                                                                                                     |
| ---------------------- | ----------------------------------------------------------------------------------------------------------- |
| `DiegoCIRole`            | Enables Github (Action workflows?) as a federated indentity, access to your AWS EKS cluster resources, critical to the GitOps model. Basically, with this role, [Github OIDC (OpenID Connect)](https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect) is trusted as a federated identity. Short-lived OIDC tokens for accessing AWS account resources are constrained to only come from your GitHub organization. As deployments take place, it means CI pipelines can execute via Github Actions, with unit tests. |
| `DiegoApiRole`           | Allows assumption of a web identity which interacts with **Diego API**. |
| `DiegoDnsControllerRole` | Assumed by External Domain controller which dynamically updates DNS records, when the IP changes for services in the Kubernetes cluster. It allows creation and deletion of DNS records in Diego’s Route53 hosted zone and is used to register new Diego enabled applications. | 
| `DiegoLBControllerRole`  | Assumed by [AWS Load Balancer Controller](https://docs.aws.amazon.com/eks/latest/userguide/aws-load-balancer-controller.html), provisioned in the cluster. Basically, it manages AWS Elastic Load Balancers set-up in the cluster. |
| `DiegoAppSecretsReader`  | Role is set up separately for `Preview`, `NonProd` and `Prod`, to fetch secrets required for the environment, corresponding to a namepspace in the cluster. |

### List of AWS IAM Policies

| IAM policy             | IAm Role    | Purpose                                                                                       |
| ---------------------- | ----------------------------------------------------------------------------------------------------------- |
| `diego-ci`               | `DiegoCIRole` | Allows interactions with AWS Elastic Container Repository (ECR), for software image 
upload and retrieval in relation to applications to deploy |
| diego-manage-secrets   | DiegoApiRole | Secrets can be managed in **Diego Hub**, which interacts with the **Diego API**, via the DiegoApiRole role. Secrets are stored as parameters in your AWS account, under the [AWS Systems Manager Parameter Store](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html). The policy also enables changes to your oganisation's domain R53 record sets - [`route53:ChangeResourceRecordSets`](https://docs.aws.amazon.com/Route53/latest/APIReference/API_ChangeResourceRecordSets.html) |
| `diego-manage-zone`      | `DiegoDnsControllerRole` | Enables various list permissions for organization's sub-domain managed in AWS R53 e.g. for setup for Diego `diego.<your-organisation's-domain>.com` |
| `diego-manage-alb`       | `DiegoLBControllerRole` | Provisions a collections of permissions. Enables permissions to manage ELBs and EC2s used for the EKS cluster e.g. for managing tags and security groups. It also provides permissions for yielding information for security related certificates e.g. SLS/TLS for domains (via [AWS Certificate Manager](https://aws.amazon.com/certificate-manager/)), [AWS WAF](https://aws.amazon.com/waf/), which provides a firewall for protecting applications from common exploits. Also, for [AWS Shield](https://aws.amazon.com/shield/), which provides managed DDoS protection. |
| `diego-<env>-secret-access` | `DiegoAppSecretsReader<env>` | Provides role the permission to fetch secrets for environmental variables required for deployments into the EKS cluster. |
| `diego-create-repository` | `DiegoAppControllerRole` | Creates an ECR repository for images. These are created per a application (check!)


## Isolated Kubernetes Workload Environments

As part of Diego Core, Kubernetes namespaces provide isolation for workloads for `Preview`, `NonProd` and `Prod` environments within the same EKS cluster. Basically, a Kubernetes service for an application can be assigned namespaces, which correspond to an environment and the required cluster resources would be isolated. [Kubernetes Pod restrictions](https://kubernetes.io/docs/concepts/security/pod-security-admission/) are applied at the namespace level, when pods are created for deployments. Pod Security Standards are configured to define the isolation for pods. 
