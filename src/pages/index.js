import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Logo from "../components/Logo";
import { useColorMode } from "@docusaurus/theme-common";
import Card from "../components/Card";
import Icon from "../components/Icon";
import NavHeader from "../components/NavHeader";
import DiegoScheme from "../../static/img/diego-scheme.png";
import DefaultButton from "../components/input/Button";
import classed from "classed-components";

const Button = classed(DefaultButton)("tw-!px-8 tw-!py-4 tw-text-xs");

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className="tailwind">
      <header className="tw-p-4 tw-flex tw-flex-col tw-items-center tw-gap-6 tw-bg-[#122030] tw-overflow-hidden">
        <div className="tw-flex tw-items-center tw-gap-4">
          <Logo color="dark" className="tw-h-8" />
        </div>
        <span className="tw-text-white tw-font-regular tw-text-center lg:tw-text-lg 2xl:tw-text-xl tw-overflow-visible">
          Diego is an extensible, opinionated platform for building and
          deploying high quality, containerized applications to Kubernetes with
          GitOps
        </span>
        <p className={clsx("tw-text-xl", "tw-text-white")}>
          {siteConfig.tagline}
        </p>
      </header>
    </div>
  );
}

export default function Home() {
  let whatIsDiegoSubTitle = "Find out more about this amazing platform";
  let deploymenGuideSubTitle =
    "Plan and install Diego in your own cloud account";
  let troubleshootingSubTitle =
    "Browse through solutions to common problems, talk to us";
  let patternsSubTitle1 = "Refer to a collection of cloud engineering patterns";
  let usageSubTitle1 =
    "Let Diego manage builds and deployments for your application";
  let tutorialsSubTitle1 =
    "Check out our demos and videos to start using Diego smoothly";

  return (
    <div className="tailwind">
      <div className="tw-min-h-screen tw-overflow-hidden tw-bg-[#122030]">
        {/* <NavHeader /> */}
        <HomepageHeader />
        <main className="tw-overflow-hidden tw-gap-1 tw-p-8 tw-justify-center">
          <div className="tw-grid lg:tw-grid-cols-1 2xl:tw-grid-cols-3  tw-gap-20 tw-p-8 tw-bg-[#122030] tw-justify-items-center">
            <Card
              title="What is Diego"
              subTitle={whatIsDiegoSubTitle}
              icon="diegoLogo"
              url="/docs/what-is-diego/introduction"
            ></Card>
            <Card
              title="Deployment Guide"
              subTitle={deploymenGuideSubTitle}
              icon="las la-cloud-upload-alt"
              url="/docs/deployment-guide/introduction"
            ></Card>
            <Card
              title="Usage Guide"
              subTitle={usageSubTitle1}
              icon="las la-terminal"
              url="/docs/usage-guide/deploying-your-application"
            ></Card>
            <Card
              title="Tutorials"
              subTitle={tutorialsSubTitle1}
              icon="las la-chalkboard-teacher"
              url="/docs/tutorials/introduction"
            ></Card>
            <Card
              title="Patterns"
              subTitle={patternsSubTitle1}
              icon="las la-stream"
              url="/docs/patterns/introduction"
            ></Card>
            <Card
              title="Troubleshooting"
              subTitle={troubleshootingSubTitle}
              icon="las la-info-circle"
              url="/docs/troubleshooting/introduction"
            ></Card>
          </div>
        </main>
        <div className="tw-fixed tw-bottom-0 tw-w-full tw-bg-[#242747] tw-text-center tw-align-text-bottom tw-overflow-hidden">
          Copyright © {new Date().getFullYear()} Tech Amigos Ltd, Built with
          Docusaurus.
        </div>
      </div>
    </div>
  );
}
