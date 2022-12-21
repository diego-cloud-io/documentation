import React from "react";
import Icon from "./Icon";
import clsx from "clsx";
import Link from "@docusaurus/Link";

export default function Card(props: {
  icon: string;
  title: string;
  children: React.ReactNode;
  url?: string;
}) {
  return (
    <Link href={props.url}>
      <div
        className={clsx(
          "cursor-pointer h-full flex flex-col items-center  border-purple-200 border-solid rounded-lg p-4 pt-6 shadow-md shadow-purple-500 relative gap-2",
          "bg-lime-400"
        )}
      >
        <Icon className={clsx("text-3xl", props.icon, "text-slate-200")} />
        <h1
          className={clsx(
            "text-2xl",

            "text-slate-200"
          )}
        >
          {props.title}
        </h1>
        <p className="text-slate-300">{props.children}</p>
      </div>
    </Link>
  );
}
