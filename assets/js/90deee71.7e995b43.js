"use strict";(self.webpackChunkdiego=self.webpackChunkdiego||[]).push([[690],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>g});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},u="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),u=s(n),m=r,g=u["".concat(p,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(g,o(o({ref:e},d),{},{components:n})):a.createElement(g,o({ref:e},d))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[u]="string"==typeof t?t:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2456:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:2,title:"Planning Guidance"},o="Planning Guidance",l={unversionedId:"deployment-guide/planning-guidance",id:"deployment-guide/planning-guidance",title:"Planning Guidance",description:"AWS Costs",source:"@site/docs/deployment-guide/planning-guidance.md",sourceDirName:"deployment-guide",slug:"/deployment-guide/planning-guidance",permalink:"/documentation/docs/deployment-guide/planning-guidance",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/deployment-guide/planning-guidance.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Planning Guidance"},sidebar:"deploymentSidebar",previous:{title:"Introduction",permalink:"/documentation/docs/deployment-guide/introduction"},next:{title:"Deployment Assets",permalink:"/documentation/docs/deployment-guide/deployment-assets"}},p={},s=[{value:"AWS Costs",id:"aws-costs",level:2},{value:"Licensing Costs",id:"licensing-costs",level:2},{value:"Sizing",id:"sizing",level:2}],d={toc:s};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"planning-guidance"},"Planning Guidance"),(0,r.kt)("h2",{id:"aws-costs"},"AWS Costs"),(0,r.kt)("p",null,"The typical cost for running a Diego installation based on the earlier defined ",(0,r.kt)("a",{parentName:"p",href:"../deployment-guide/introduction#deployment-overview"},"deployment overview")," and ",(0,r.kt)("a",{parentName:"p",href:"../deployment-guide/introduction#prerequisites-and-requirements"},"technical prerequisites")," are detailed below."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Costs are based on a deloyment to region ",(0,r.kt)("inlineCode",{parentName:"p"},"eu-west-2"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"AWS Service"),(0,r.kt)("th",{parentName:"tr",align:null},"AWS Pricing"),(0,r.kt)("th",{parentName:"tr",align:null},"Cost (per day)"),(0,r.kt)("th",{parentName:"tr",align:null},"Purpose"),(0,r.kt)("th",{parentName:"tr",align:null},"Reference"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EKS"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.10 per hour"),(0,r.kt)("td",{parentName:"tr",align:null},"$2.40"),(0,r.kt)("td",{parentName:"tr",align:null},"Cluster to host Diego tooling and customer applications"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://aws.amazon.com/eks/pricing/"},"https://aws.amazon.com/eks/pricing/"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EC2 - t3.large on-demand"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.0944 per hour"),(0,r.kt)("td",{parentName:"tr",align:null},"$2.27"),(0,r.kt)("td",{parentName:"tr",align:null},"The EKS compute node required to run Diego"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://aws.amazon.com/ec2/pricing/on-demand/"},"https://aws.amazon.com/ec2/pricing/on-demand/"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EBS - gp2"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.12 Gb/month"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.32"),(0,r.kt)("td",{parentName:"tr",align:null},"Cost of the standard root disk (80GB) for the compute node"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://aws.amazon.com/ec2/pricing/on-demand/"},"https://aws.amazon.com/ec2/pricing/on-demand/"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NAT Gateway"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.05 per hour"),(0,r.kt)("td",{parentName:"tr",align:null},"$1.20"),(0,r.kt)("td",{parentName:"tr",align:null},"Provides egress from your cluster"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://aws.amazon.com/vpc/pricing/"},"https://aws.amazon.com/vpc/pricing/"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ELB"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.02646 per hour"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.64"),(0,r.kt)("td",{parentName:"tr",align:null},"Provides ingress for Diego tooling and customer applications"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://aws.amazon.com/elasticloadbalancing/pricing/?nc=sn&loc=3"},"https://aws.amazon.com/elasticloadbalancing/pricing/?nc=sn&loc=3"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Route53 Hosted Zone"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.50 per month"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.02"),(0,r.kt)("td",{parentName:"tr",align:null},"Delegated zone for Diego to manage DNS records for tooling and customer applications"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://aws.amazon.com/route53/pricing/"},"https://aws.amazon.com/route53/pricing/"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Total")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"$6.74")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"All the above AWS services are mandatory for running Diego. "),(0,r.kt)("h2",{id:"licensing-costs"},"Licensing Costs"),(0,r.kt)("p",null,"Diego software is free to use. "),(0,r.kt)("p",null,"We also provide additional on-boarding service for a smoother, faster set-up of customer applications:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Service"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Cost"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Onboarding"),(0,r.kt)("td",{parentName:"tr",align:null},"One of our qualified engineers will provide an assisted setup process that caters for customer specific needs around setting up the tools and applications. This services guarantees setup is completed within 5 working days"),(0,r.kt)("td",{parentName:"tr",align:null},"\xa39,999 + VAT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Support"),(0,r.kt)("td",{parentName:"tr",align:null},"Access to our qualified engineers via a dedicated slack channel to assist with ad-hoc requests, provide guidance. This service also includes regular updates to Diego tooling."),(0,r.kt)("td",{parentName:"tr",align:null},"\xa31,999 + VAT per month (3 months minimum contract)")))),(0,r.kt)("h2",{id:"sizing"},"Sizing"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"../deployment-guide/introduction#prerequisites-and-requirements"},"prerequisites and requirements")," define a minimally sized cluster that can run Diego whilst leaving additional capacity to run your own Diego enabled applications in the cluster. "),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Diego ",(0,r.kt)("strong",{parentName:"p"},"does not")," install an auto-scaling solution in your EKS cluster.")),(0,r.kt)("p",null,"Building a cluster that scales automatically to meet the needs of your applications and environments is recommended. Many tools exist to achieve this such as ",(0,r.kt)("a",{parentName:"p",href:"https://karpenter.sh/"},"Karpenter"),"."))}u.isMDXComponent=!0}}]);