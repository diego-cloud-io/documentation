---
sidebar_position: 4
---

# What is setup in AWS?

Diego installs a AWS resources, based on a IaaC AWS Cloudformation stack.

The Cloudformation stack provisions:

● A R53 hosted zone for your organisation’s Diego Hub - `diego.<organisation domain name>`.

● Various IAM roles related to:

&nbsp; &nbsp; ○ Continuous Integration

&nbsp; &nbsp; ○ Diego API

&nbsp; &nbsp; ○ Diego DNS Controller

&nbsp; &nbsp; ○  Diego Load Balancer Controller

&nbsp; &nbsp; ○ External Secrets Operator

&nbsp; &nbsp; ○ IAM OIDC (OpenID Connect) providers for:

:::info

- Github Actions - to allow CI pipelines to access resources in cluster

- IAM Roles for Server Accounts (IRSA) on EKS - establishes a trust relationship between specific external identity provider (IdP) services that support OpenID Connect (OIDC) and your organisation’s AWS account. [More information here](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_oidc.html)

:::

● The [main components of Diego](./key-components.md) are installed into your AWS EKS cluster, alongside a toolchain of open source tooling which make up Diego-Core.
