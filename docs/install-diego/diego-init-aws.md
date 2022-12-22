---
sidebar_position: 5
---

2. `diego init aws`

Estimated time: 2 minutes ⏱️

> This updates your diego configuration file - $HOME/.diego/config with information required for further steps.

Command will request for:

• AWS account ID

- Related to where AWS EKS cluster is hosted.

• AWS Region

- AWS region where AWS EKS cluster is hosted.

• AWS EKS Cluster Name

- Name for AWS EKS cluster.

• AWS EKS Cluster OIDC Provider URL

- The URL for the EKS Cluster can be obtained from your AWS Console under OpenID Connect provider URL under the Overview for your Kubernetes cluster. e.g. `https://oidc.eks.eu-west-2.amazonaws.com/id/<32 character alphanumeric string>`

Checks:

✔️ Do `cat $HOME/.diego/config` to check aws section is updated for your profile.
