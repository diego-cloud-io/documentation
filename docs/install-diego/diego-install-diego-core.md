---
sidebar_position: 8
---

5. `diego install diego-core`

Estimated time: 50 minutes ⏱️

> This updates your diego configuration file - $HOME/.diego/config with information required for further steps.

● Use with aws-context
● Please note, this will yield a password for Argo CD, which can be used with the username `admin`.

```
amigo-1@TAA0001 diego-cli % aws-vault exec amigo-1 -- diego install diego-core
"diego" has been added to your repositories
NAME: diego-base
LAST DEPLOYED: Fri Dec 16 10:50:22 2022
NAMESPACE: argocd
STATUS: deployed
REVISION: 1
TEST SUITE: None
appproject.argoproj.io/diego-tooling created
application.argoproj.io/root created
application.argoproj.io/project-applications created
application.argoproj.io/project-environments created
Cluster amigo-1-cluster has been configured successfully
ArgoCD Admin Password: xxxxxxxxxxxxxx
```

● Monitor resource creation in the Kubernetes cluster with aws context:
`aws-vault exec amigo-1 -- kubectl get applications -n argocd --watch`

● Please note it can take up to 1 hour for all resources to become healthy

```
NAME                        SYNC STATUS   HEALTH STATUS
aws-lb-controller           OutOfSync     Healthy
cert-manager                Synced        Healthy
dex                         Synced        Progressing
diego-core                  Synced        Progressing
diego-oauth2-proxy          Synced        Degraded
external-dns-controller     Synced        Healthy
external-secrets-operator   Synced        Healthy
project-applications        Synced        Healthy
project-environments        Synced        Healthy
root                        Synced        Healthy
diego-oauth2-proxy          Synced        Degraded
external-dns-controller     Synced        Healthy
project-applications        Synced        Healthy
dex                         Synced        Progressing
root                        Synced        Healthy
project-environments        Synced        Healthy
aws-lb-controller           OutOfSync     Healthy
diego-core                  Synced        Progressing
root                        Synced        Healthy
external-secrets-operator   Synced        Healthy
cert-manager                Synced        Healthy
external-dns-controller     Synced        Healthy
project-applications        Synced        Healthy
project-environments        Synced        Healthy
dex                         Synced        Progressing
diego-oauth2-proxy          Synced        Degraded
aws-lb-controller           OutOfSync     Healthy
```

Checks:

✔️ Once this is setup, the subdomains related to diego should be accessible on the clients domain e.g. <br/>
● `hub.diego.<your organisation's domain>` <br/>
● `argocd.diego.<your organisation's domain>` <br/>
✔️ Go to [DNS checker](https://dnschecker.org/) to check these domains are accessible <br/>
✔️ Check you can login to Argo CD <br/>
✔️ Check you can access Diego Hub.
