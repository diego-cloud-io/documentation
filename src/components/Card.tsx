import React from "react";
import Icon from "./Icon";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Logo from "./Logo";
import imageDiego from "../../static/img/fav.jpeg";

export default function Card(props: {
  icon: string;
  title: string;
  subTitle: string;
  url: string;
}) {
  return (
    <Link href={props.url} className="tw-w-4/5 tw-h-full">
      <div
        className={clsx(
          "tw-flex-grow tw-cursor-pointer tw-box-content tw-border-4 tw-min-h-full tw-border-transparent tw-flex tw-flex-col tw-items-center tw-rounded-md tw-p-4 tw-pt-3 tw-shadow-md tw-shadow-purple-500 hover:tw-border-4 hover:tw-border-lime-400 tw-relative tw-gap-0",
          "tw-bg-white"
        )}
      >
        {props.icon === "diegoLogo" ? (
          <img className="tw-w-[50px] tw-h-[50px]" src={imageDiego}></img>
        ) : (
          <Icon
            className={clsx(
              "tw-text-5xl",
              props.icon,
              "tw-text-black tw-text-center"
            )}
          />
        )}
        <p className="tw-text-xl tw-font-bold tw-text-black tw-text-center">
          {props.title}
        </p>
        <p className="tw-text-black tw-text-lg tw-font-light tw-text-center tw-py-4 tw-mt-2 tw-break-normal">
          {props.subTitle}
        </p>
      </div>
    </Link>
  );
}
