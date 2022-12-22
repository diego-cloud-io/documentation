---
sidebar_position: 7
---

4. `diego setup aws`

Estimated time: 10 minutes ⏱️

> Installs the AWS Cloudformation stack specified in the diego-tooling repo.

● Please ensure to execute this command with an aws context.

● When you execute this command, it will wait for you to add certain Namespace records for where the diego namespace for your organisation is managed.

● Once you add these, the command will continue.

```
amigo-1@TAA0001 diego-cli % aws-vault exec amigo-1 -- diego setup aws
Creating cloudformation stack diego-stack .....

Please add following NS records where diego.amigo-1.ltd is managed
ns-1821.awsdns-35.co.uk.
ns-162.awsdns-20.com.
ns-663.awsdns-18.net.
ns-1041.awsdns-02.org.

Awaiting domain delegation until the cloud formation status is CREATE_COMPLETE.
Diego AWS setup complete
```

**Domain Delegation in AWS**

● Go to the domain manager for your organisation’s domain.

● Add namespace record for diego , with the NS namespace record type.

● The NS records can be added for this, which were yielded from the command line.

● Here’s an example of how a domain record can be added in AWS Console under R53:

![Creating Namespace Record](./img/creating-namespace-record.png)

Checks:

✔️ The AWS R53 zone id is updated for the `diego-tooling` repo in `diego-core/external-dns-controller`.yaml. <br/>
✔️ Login to AWS and check cloudformation stack created with IAM resources and a R53 hosted zone <br/>
✔️ Go to [DNS checker](https://dnschecker.org/) and check that the namespace for `diego.<your organisation's domain>` is replicated around the world.
