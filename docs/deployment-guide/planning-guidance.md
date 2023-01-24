---
sidebar_position: 2
title: "Planning Guidance"
---

# Planning Guidance

## AWS Costs 

The typical cost for running a Diego installation based on the earlier defined [deployment overview](../deployment-guide/introduction#deployment-overview) and [technical prerequisites](../deployment-guide/introduction#prerequisites-and-requirements) are detailed below.

:::info
Costs are based on a deloyment to region `eu-west-2`
:::

| AWS Service | AWS Pricing | Cost (per day) | Purpose | Reference |
| --- | --- | --- | --- |--- |
| EKS | $0.10 per hour| $2.40 | Cluster to host Diego tooling and customer applications | https://aws.amazon.com/eks/pricing/ |
| EC2 - t3.large on-demand | $0.0944 per hour| $2.27 | The EKS compute node required to run Diego | https://aws.amazon.com/ec2/pricing/on-demand/ |
| EBS - gp2 | $0.12 Gb/month | $0.32 | Cost of the standard root disk (80GB) for the compute node | https://aws.amazon.com/ec2/pricing/on-demand/ |
| NAT Gateway | $0.05 per hour| $1.20 | Provides egress from your cluster | https://aws.amazon.com/vpc/pricing/ |   
| ELB | $0.02646 per hour | $0.64 | Provides ingress for Diego tooling and customer applications | https://aws.amazon.com/elasticloadbalancing/pricing/?nc=sn&loc=3 |
| Route53 Hosted Zone | $0.50 per month | $0.02 | Delegated zone for Diego to manage DNS records for tooling and customer applications | https://aws.amazon.com/route53/pricing/ |
| | **Total**| **$6.74** | 

All the above AWS services are mandatory for running Diego. 

## Licensing Costs 

Diego software is free to use. 

We also provide additional on-boarding service for a smoother, faster set-up of customer applications:

| Service | Description | Cost |
| ------------ | ------------------------ | ------------ |
| Onboarding | One of our qualified engineers will provide an assisted setup process that caters for customer specific needs around setting up the tools and applications. This services guarantees setup is completed within 5 working days | £9,999 + VAT
| Support | Access to our qualified engineers via a dedicated slack channel to assist with ad-hoc requests, provide guidance. This service also includes regular updates to Diego tooling. | £1,999 + VAT per month (3 months minimum contract)


## Sizing

The [prerequisites and requirements](../deployment-guide/introduction#prerequisites-and-requirements) define a minimally sized cluster that can run Diego whilst leaving additional capacity to run your own Diego enabled applications in the cluster. 

:::info
Diego **does not** install an auto-scaling solution in your EKS cluster.
:::

Building a cluster that scales automatically to meet the needs of your applications and environments is recommended. Many tools exist to achieve this such as [Karpenter](https://karpenter.sh/). 
