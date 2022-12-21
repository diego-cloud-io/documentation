import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Logo from "../components/Logo";
import styles from "./index.module.css";
import { useColorMode } from "@docusaurus/theme-common";
import Card from "../components/Card";
import Icon from "../components/Icon";
import NavHeader from "../components/NavHeader";
import DiegoScheme from "../../static/img/diego-scheme.png";
import DefaultButton from "../components/input/Button";
import classed from "classed-components";

const Button = classed(DefaultButton)("!px-8 !py-4 text-xs");

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      className={clsx(
        "p-4 flex flex-col items-center gap-2 bg-[#122030] overflow-hidden"
      )}
    >
      <img src={DiegoScheme} alt="Image Text" width="550px" height="550px" />
      <span className="text-white font-bold text-xl overflow-visible">
        Diego is an extensible, opinionated and integrated platform for building
        high quality, containerized
      </span>
      <span className="text-white font-bold text-xl overflow-visible">
        applications with GitOps based deployment to Kubernetes using
        pre-configured open-source tooling.
      </span>
      <p className={clsx("text-2xl", "text-white")}>{siteConfig.tagline}</p>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div>
      <div className="min-h-max overflow-hidden">
        <NavHeader />
        <HomepageHeader />
        <main className="h-max overflow-hidden">
          <div className="grid grid-cols-3 gap-6 p-16 text-center bg-[#122030] overflow-hidden">
            <Icon className="las la-book text-4xl text-purple-500" />
            <Icon className="lab la-github text-4xl text-purple-500" />
            <Icon className="las la-laptop-code text-4xl text-purple-500" />
            <p className="text-white normal-case flex flex-col">
              Learn about Diego and its fundamental
              <span>concepts</span>
            </p>
            <p className="text-white normal-case flex flex-col ">
              Browse our template repositories, examples
              <span>and more</span>
            </p>
            <p className="text-white normal-case break-w flex flex-col">
              Follow tutorials to learn how to deploy
              <span>applications in Kubernetes using Diego</span>
            </p>
            <Link to="/docs/intro">
              <Button color="green" size="xl">
                Documentation
              </Button>
            </Link>
            <Link>
              <Button color="green" size="xl">
                Codebase
              </Button>
            </Link>
            <Link>
              <Button color="green" size="xl">
                Demos
              </Button>
            </Link>
          </div>
        </main>
      </div>
      <div className="h-full p-10 bg-[#242747] text-center align-text-bottom overflow-hidden">
        Copyright © {new Date().getFullYear()} Tech Amigos Ltd, Built with
        Docusaurus.
      </div>
    </div>
  );
}
