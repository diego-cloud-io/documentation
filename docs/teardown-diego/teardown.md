---
sidebar_position: 1
---

# Teardown Diego setup for your Organisation

Given you have set-up Diego in an isolated AWS EKS cluster with [these instructions for creating an eks cluster with eksctl](../getting-started/create-eks-cluster), here are some steps which can be followed for decomissioning Diego:

## Here are steps for deleting resources in AWS:

1. Delete Cloudformation stack for node group

2. Delete Cloudformation stack for cluster

3. Delete Load Balancer under EC2 service

4. Navigate to AWS Certificate Manager and delete certificate record for the hosted R53 zone namespace

5. Delete all records of the hosted zone in R53

6. Delete Cloudformation stack for diego-core

## Here are steps for deleting resources in your Github organisation:

## Delete these repositories in your test Github organisation:

• `diego-default-project`

• **`diego-tooling`**

## Remove Github app from Github Organisation

• Go to developer-settings and click Github Apps

• Edit the bot `diego-<your github organisation>-bot`

• Click on Advanced in left-hand menu and then the option Delete Github App

• Delete local Diego Config file:

`rm -rf $HOME/.diego`

• Delete Diego helm repo:

`helm repo remove diego`
