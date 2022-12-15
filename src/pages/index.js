import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Logo from "../components/Logo";
import styles from "./index.module.css";
import { useColorMode } from "@docusaurus/theme-common";

function HomepageHeader() {
  const { colorMode, setColorMode } = useColorMode();

  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      className={clsx("hero hero--primary flex flex-col items-center gap-8")}
    >
      <Logo color={colorMode} className="h-40 items-center" />
      <p
        className={clsx(
          "text-2xl",
          colorMode === "dark" ? "text-white" : "text-slate-800"
        )}
      >
        {siteConfig.tagline}
      </p>
      <div className={styles.buttons}>
        <Link className="button button--secondary button--lg" to="/docs/intro">
          Diego Tutorial - 5min ⏱️
        </Link>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
