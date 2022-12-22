---
sidebar_position: 5
---

2. `diego init aws`

Estimated time: 2 minutes ⏱️

> This updates your diego configuration file - $HOME/.diego/config with information required for further steps.

## Command will request for:

● AWS account ID

&nbsp; &nbsp; ○ Related to where AWS EKS cluster is hosted.

● AWS Region

&nbsp; &nbsp; ○ AWS region where AWS EKS cluster is hosted.

● AWS EKS Cluster Name

&nbsp; &nbsp; ○ Name for AWS EKS cluster.

● AWS EKS Cluster OIDC Provider URL

&nbsp; &nbsp; ○ The URL for the EKS Cluster can be obtained from your AWS Console under OpenID Connect provider URL under the Overview for your Kubernetes cluster. e.g. `https://oidc.eks.eu-west-2.amazonaws.com/id/<32 character alphanumeric string>`

Checks:

✔️ Do `cat $HOME/.diego/config` to check aws section is updated for your profile.
