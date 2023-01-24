import React from "react";
import Logo from "./Logo";
import styles from "./components.module.css";

export default function NavHeader() {
  return (
    <nav className="tw-bg-purple-900 tw-w-full tw-h-30 tw-flex tw-flex-col tw-justify-center tw-items-center">
      <Logo color="dark" className="tw-h-16" />
      Diego is an extensible, opinionated platform for building and deploying
      high quality, containerized applications to Kubernetes with GitOps
    </nav>
  );
}
