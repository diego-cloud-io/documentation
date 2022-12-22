---
sidebar_position: 1
---

# Prerequisites

Here are some prerequisites for working with Diego CLI...

**GitHub Organisation**

• Ensure you are setup as a owner for your Github organisation with admin rights. <br/> 
• [Here's Github docs](https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch) for setting up your new organisation.

**AWS account with Elastic Kubernetes Service (EKS) cluster**

• Please ensure you have a EKS Kubernetes cluster up and running with node. <br/> 
• Otherwise, [here's some guidance](./create-eks-cluster.md) for setting this up for your AWS account <br/> 

Check the following are installed locally: <br/> 
• [Go](https://go.dev/dl/) <br/> 
• [Helm v3](https://helm.sh/docs/intro/install/) - e.g. on mac `brew install helm` <br/> 
• [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl-macos/) - for monitoring resource creation. <br/> 
• Software to set the aws context for commands - e.g.
• [aws-vault](https://github.com/99designs/aws-vault) <br/> 
• [aws configure](https://docs.aws.amazon.com/cli/latest/reference/configure/) <br/> 
• This can be used to set a aws profile for the AWS account where resources related to Diego CD Pack will be setup. <br/> 

## Important

• Please ensure the subnets for your Kubernetes cluster tagged with the following: <br/> 
```
key = kubernetes.io/role/elb
value = 1
```
• This is to allow the ALB Load Balancer Controller to discover them. <br/> 

Please ensure you have the following information to hand: <br/> 

• Github Organization Name
> Where your organisation's application repos are hosted. 

• Organisation's Domain Name: e.g. `<your-organisation's-domain>.com`
> A R53 namespace will be created for diego, in relation to the domain e.g. `diego.<your-organisation's-domain>.com`.

• AWS account ID <br/> 
> Related to where AWS EKS cluster is hosted.

• AWS region <br/> 
> AWS region where AWS EKS cluster is hosted.

• AWS EKS Cluster Name <br/> 
> Name for AWS EKS cluster.

• AWS EKS Cluster OIDC Provider URL <br/> 
> The URL for the EKS Cluster can be obtained from your AWS Console under OpenID Connect provider URL under the Overview for your Kubernetes cluster. e.g. `https://oidc.eks.eu-west-2.amazonaws.com/id/<32 character alphanumeric string>`