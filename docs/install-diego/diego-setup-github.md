---
sidebar_position: 7
---

3. `diego setup github`

Estimated time: 2 minutes

> Sets up 2 template Github repos in your Github Organisation: `diego-default-project` and `diego-tooling`. `diego-default-project` provides basic configuration for Argo CD project which would would list your onboarded applications and environments. `diego-tooling` provides an AWS cloud formation stack for provisioning aws resources and also references helm charts for open source tooling to be provisioned in the cluster as part of Diego Core.


Checks:

✔️  `diego-default-project` and `diego-tooling` are setup in your Github Organisation repository.
✔️  In `diego-default-project` your organisations domain appears in the `applications` folder files and your organisation's name appears in the `root` folder files.
✔️  In `diego-tooling` your organisations domain and name, as well as your cluster name and AWS account id should have populated across files in the diego-core folder. Please note `R53_ZONE_ID` is updated in a further step. 

