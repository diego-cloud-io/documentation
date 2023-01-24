---
sidebar_position: 5
title: "Operation Guidance"
---
# Operation Guidance

## Checking Diego Health
Diego is composed of a number of collaborating components as described in the [introduction](../deployment-guide/introduction.md).

### Check ArgoCD is running and available

ArgoCD is made up of the following controllers and services:

- diego-base-argocd-application-controller
- diego-base-argocd-applicationset-controller
- diego-base-argocd-notifications-controller
- diego-base-argocd-redis
- diego-base-argocd-repo-server
- diego-base-argocd-server

Run the following command at your terminal and check there is a `running` pod for each of these: 

```
kubectl get pods -n argocd 
```

The output should be similar:

```
NAME                                                          READY   STATUS    RESTARTS   AGE
diego-base-argocd-application-controller-0                    1/1     Running   0          16d
diego-base-argocd-applicationset-controller-549bd598d-brbvs   1/1     Running   0          16d
diego-base-argocd-notifications-controller-587655488d-j2rbh   1/1     Running   0          16d
diego-base-argocd-redis-69d64848cb-zhpc2                      1/1     Running   0          16d
diego-base-argocd-repo-server-65d77f9549-vpjm7                1/1     Running   0          16d
diego-base-argocd-server-55f68f8dd4-n2v5g                     1/1     Running   0          16d
```

Open the ArgoCD at `https://argocd.diego.<yourdomain>` to check the UI is working

### Check ArgoCD managed components are healthy

ArgoCD is responsible for the deployment and health reporting of the following Diego components:

- aws-lb-controller            
- cert-manager                 
- dex                          
- diego-core                   
- diego-oauth2-proxy           
- external-dns-controller      
- external-secrets-operator    
- production-env-prerequisites 
- project-applications         
- project-environments         
- root                         
- staging-env-prerequisites    

```
kubectl get applications -n argocd 
```

Ensure the following components are reported as `Healthy`

```
NAME                             SYNC STATUS   HEALTH STATUS
aws-lb-controller                OutOfSync     Healthy
cert-manager                     Synced        Healthy
dex                              Synced        Healthy
diego-core                       Synced        Healthy
diego-oauth2-proxy               Synced        Healthy
external-dns-controller          Synced        Healthy
external-secrets-operator        Synced        Healthy
production-env-prerequisites     Synced        Healthy
project-applications             Synced        Healthy
project-environments             Synced        Healthy
root                             Synced        Healthy
staging-env-prerequisites        Synced        Healthy
```
### Check Diego Hub is available

Open Diego Hub at `https://hub.diego.<yourdomain>` to check the UI is working.

## Backup & Recovery

- Diego keeps it's state in four different managed services listed below. Diego delegates backup responsibility to these services.
- We recommend you back up your EKS cluster state as this wll allow you to recover your cluster, including Diego and the deployment status of your applications and environments, to the most recent EKS state.
    - See [this](https://aws.amazon.com/blogs/containers/backup-and-restore-your-amazon-eks-cluster-resources-using-velero/) AWS blog outlining how this could be achieved using Velero.

| Service | State | SLA |
|---|---|---|
| AWS EKS (etcd) | Kubernetes state including all Diego API objects  |
| AWS Systems Manager ParameterStore | Sensitive environment variables for your Diego managed applications |
| AWS CloudFormation | State of AWS resources and services configured as part of Diego deployment |
| GitHub | Representation of your Diego installation and also your deployed Diego managed environments and applications |

There are no specific backup instructions or tasks for Diego beyond the automated backup provided by the AWS services that it uses (above).

### Recovery with EKS backup
Diego components will be restarted automatically once your EKS cluster is recovered. Your customer applications will be re-started by Diego, based on the last commits Diego has made to your default-project repository.

The RPO in this case is the last EKS commit to its backing store and the last commit to GitHub of the Diego application controller.

The RTO is approximately 30 minutes.

### Recovery without EKS backup
In this case the recommendation is to re-run the [final installation step](../deployment-guide/deployment-assets#command-5---deploy-diego-in-aws-eks) of Diego. After completing that step and confirming that Diego is [healthy](../deployment-guide/operation-guidance#checking-diego-health) you must then on-board your existing applications to Diego again using Diego Hub.

The RTO is approximately 30 minutes.

### Recovery after Diego component failure
This is handled by EKS. EKS will detect and restart unresponsive or unhealthy Diego components (pods).

### Recovery from AZ failure
The behaviour of Diego during an AZ failure depends on the wider configuration of the EKS cluster in which you have deployed Diego.

1. **EKS cluster with a single node in the affected AZ** 

    Diego is unavailable. When the AZ recovers, the EKS node and Diego components running on it will be automatically recovered. No Diego state will be lost.
2. **EKS cluster with multiple nodes across multiple AZs** 
    
    If Diego components are running on a node in the affected AZ then assuming there is capacity on other nodes the Kubernetes scheduler will start the Diego components on another available node. Diego will be unavailable until the components are re-started and are healthy on the other node. No Diego state will be lost.

## Routine Maintainence 

There are no routine maintainence tasks to perform for Diego.

### Patches and Upgrades

Diego components are deployed by ArgoCD. ArgoCD synchronizes the contents of the `diego-tooling` repository in your GitHub organisation as Diego components running in your EKS cluster. To update Diego you must commit changes to this repository and synchronize these changes to your EKS cluster via ArgoCD.

| Deployment | Image Version     | Chart | Patch/Upgrade Strategy |
|------------|-------------------|-------|------------------------|
| Diego Application Controller | latest | diego-core v0.20.0| Each restart of this component pulls the latest image from the Diego public DockerHub repository | 
| Diego Hub | latest | diego-core v0.20.0| Each restart of this component pulls the latest image from the Diego public DockerHub repository | 
| Diego API | latest | diego-core v0.20.0| Each restart of this component pulls the latest image from the Diego public DockerHub repository | 
| OAuth2 Proxy | v7.4.0 | oauth2-proxy v6.5.0 | Update `diego-oauth2-proxy.yaml` application manifest in your `diego-tooling` repository and manually sync in ArgoCD |
| ArgoCD | v2.5.1 | diego-base v5.13.2<br/>argo-cd v15.3.2 | Updates not yet directly supported, coming in next release of Diego CLI |
| Dex | v2.35.3 | dex v0.12.1 | Update `dex.yaml` application manifest in your `diego-tooling` repository and manually sync in ArgoCD |
| AWS Load Balancer Controller | v2.4.1 | aws-load-balancer-controller v1.4.1 | Update `aws-lb-controller.yaml` application manifest in your `diego-tooling` repository and manually sync in ArgoCD |
| DNS Controller | v0.10.2 | external-dns v1.7.1 | Update `external-dns-controller.yaml` application manifest in your `diego-tooling` repository and manually sync in ArgoCD |
| External Secrets Operator | v0.5.9 | external-secrets v0.5.9 | Update `external-secrets-operator.yaml` application manifest in your `diego-tooling` repository and manually sync in ArgoCD |
| Cert Manager Controller | v1.8.2 | cert-manager v1.8.2 | Update `cert-manager.yaml` application manifest in your `diego-tooling` repository and manually sync in ArgoCD |

Managing Licenses

### AWS Service Limits

If you are running your EKS cluster on EC2 nodes then it is important to consider the [limits on the number of pods that can run on a given EC2 instance type](https://github.com/awslabs/amazon-eks-ami/blob/master/files/eni-max-pods.txt) as this will set a capacity on the number of remaining pods you have available run your own applications. 

For example, assuming you are running a minimally sized EKS cluster with a single t3.large node:

| Node Type | Max Pods | Diego Usage (pods) | Other Required Cluster Services (pods) | Remaining Capacity for your applications (pods) |
|---|---|---|---|---|
| `t3.large` | 35 | 20 | 4 | 11 |

EMERGENCY MAINTENANCE

Provide step-by-step instructions for actions to take in the event of fault conditions, such as a transient failure of an AWS Service (e.g. availability of Amazon EC2 in a particular AZ is degraded), or a more permanent failure of an AWS service (e.g. EC2 instance has faulted, EC2 Scheduled Maintenance Event has been received). The following are required:

- [ ] Step-by-step instructions on handling fault conditions 
- [ ] Step-by-step instructions on how to recover software