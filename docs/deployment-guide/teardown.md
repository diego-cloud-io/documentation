---
sidebar_position: 7
---

# Teardown Diego setup

These tear-doown instruction only apply for the Diego components installed in your cluster.

## Here are steps for deleting resources in AWS:

- Delete the certificate validation CNAME record in the `diego.<yourdomain>` hosted zone in R53

- Delete CloudFormation stack for diego-core

## Here are steps for deleting resources in your Github organisation:

**Delete these repositories in your test Github organisation:**

- `diego-default-project`

- `diego-tooling`

**Remove Github app from Github Organisation**

- Go to developer-settings and click Github Apps

- Edit the bot `diego-<your github organisation>-bot`

- Click on Advanced in left-hand menu and then the option Delete Github App

**Deprecating local conifiguration**

- Delete local Diego Config file:

`rm -rf $HOME/.diego`

- Delete Diego helm repo:

`helm repo remove diego`
