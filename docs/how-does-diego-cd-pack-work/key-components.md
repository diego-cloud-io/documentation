---
sidebar_position: 1
---

# Diego CD Pack Overview 

Diego CD Pack comprises of 2 major components which are deployed into your AWS Kubernetes cluster: 

## Diego Base

This consists of open-source CD tools - Argo CD and associated setup needed for a GitOps way of working. 

## Diego Core

This consists of custom Diego components:

### Application controller

This is an orchestrator for managing the application state in GitHub and automate the developer process for deploying applications into different route-to-live environments, including short-lived ephemeral preview environments. 
This is further used used by Argo CD to synch to the target cluster. 

### API

This component provides the grapghql endpoint for extracting application deployment information from the cluster. This information is then displayed on an easy-to-use front-end called **Diego Hub**. 

### Hub

Serves as the front-end platform, where you can monitor deployments for applications managed by Diego. 

