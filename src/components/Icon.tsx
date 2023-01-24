import clsx from "clsx";
import React from "react";
import { ComponentProps } from "react";

export default function Icon(props: ComponentProps<"i">) {
  return (
    <i
      role="presentational"
      {...props}
      className={clsx("align-baseline leading-none", props.className)}
    />
  );
}
