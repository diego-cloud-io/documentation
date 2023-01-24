import { defaultProps } from "prism-react-renderer";
import React from "react";

export default function Highlight(props) {
  return <div className="bg-lime-500 text-4xl">{props.children}</div>;
}
