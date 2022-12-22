---
sidebar_position: 2
---

# Creating Elastic Kubernetes Service (EKS) cluster in AWS

Install software to set the aws context for running commands to create cluster- e.g. <br/>
● [aws-vault](https://github.com/99designs/aws-vault) <br/>
● [aws configure](https://docs.aws.amazon.com/cli/latest/reference/configure/) <br/>
● This can be used to set a aws profile for the AWS account where resources related to Diego CD Pack will be setup. <br/>

Install [eksctl](https://github.com/weaveworks/eksctl) - this is simple CLI tool for creating clusters. Further docs for eksctl are available [here](https://eksctl.io/introduction/#getting-started).

## Creating EKS Cluster with node

1. Create EKS cluster with aws context: <br/>

```
aws-vault exec amigo-1 -- eksctl create cluster \
--name <cluster-name> \
--region eu-west-2 \
--version 1.24 \
--vpc-public-subnets subnet-02bc9be7,subnet-0346bc9,subnet-041514 \
--without-nodegroup
```

● Estimated time: 15 minutes ⏱️ <br/>

● Please substitute `<cluster-name>` as needed. <br/>

● CLI will notify when this completes: <br/>

● Under AWS Cloudformation in the AWS console, you will see a new stack created for the cluster <br/>

`2022-12-14 16:58:41 [✔]  EKS cluster "amigo-1-cluster" in "eu-west-2" region is ready`

2. Add a managed node group with aws context: <br/>

● Please substitute `<cluster-name>` and `<node-group-name>` as needed.

```
aws-vault exec amigo-1 -- eksctl create nodegroup \
  --cluster <your-cluster-name> \
  --region eu-west-2 \
  --name <node-group-name> \
  --node-type t3.large \
  --nodes 1 \
  --nodes-min 1 \
  --nodes-max 1
```

● Estimated time: 3-4 minutes ⏱️ <br/>

● Under AWS Cloudformation in the AWS console, you will see a new stack created for the node <br/>
