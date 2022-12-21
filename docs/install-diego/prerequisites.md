---
sidebar_position: 2
---

# Prerequisites

As this project is in an alpha, please note Diego currently supports mac only.

Here are some prerequisites...

- Ensure you are setup as a owner for your Github organisation with admin rights.
- You already have a EKS Kubernetes cluster up and running with node.

Check the following are installed locally:
- [Go](https://go.dev/dl/)
- [Helm v3](https://helm.sh/docs/intro/install/) - e.g. om mac `brew install helm`
- Software to set the aws context for commands - e.g.
    - [aws-vault](https://github.com/99designs/aws-vault)
    - [aws configure](https://docs.aws.amazon.com/cli/latest/reference/configure/
    )
    - This can be used to set a aws profile for the AWS account where resources related to Diego CD Pack will be setup. 

## Important

- Please ensure the subnets for your Kubernetes cluster tagged with the following:
```
key = kubernetes.io/role/elb
value = 1
```
- This is to allow the ALB Load Balancer Controller to discover them.

Please ensure you have the following information to hand:

- Github Organization Name
    - Where your organisation's application repos are hosted. 

- Organisation's Domain Name: e.g. `<your-organisation's-domain>.com`
    - A R53 namespace will be created for diego, in relation to the domain e.g. `diego.<your-organisation's-domain>.com`.

- AWS account ID
    - Related to where AWS EKS cluster is hosted.

- AWS region
    - AWS region where AWS EKS cluster is hosted.

- AWS EKS Cluster Name
    - Name for AWS EKS cluster.

- AWS EKS Cluster OIDC Provider URL

The URL for the EKS Cluster can be obtained from your AWS Console under OpenID Connect provider URL under the Overview for your Kubernetes cluster. e.g. https://oidc.eks.eu-west-2.amazonaws.com/id/<32 character alphanumeric string>  (we can make this info available on hover)
