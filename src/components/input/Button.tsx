import classed from "classed-components";

const colors = {
  // class={
  none: "",
  white:
    "tw-text-slate-500 tw-bg-white tw-hover:bg-slate-100 tw-active:bg-slate-200 tw-ring-slate-700/70",
  green:
    "tw-bg-green-500 tw-hover:bg-green-600 tw-active:bg-green-700 tw-text-white tw-hover:text-green-100 tw-active:text-green-200 tw-ring-green-700/70",
  lime: "tw-bg-lime-400 tw-hover:bg-lime-500 tw-active:bg-lime-600 tw-text-white tw-hover:text-slate-100 tw-active:text-slate-200 tw-ring-lime-700/70",
};

const sizes = {
  // class={
  none: "",
  xs: "tw-px-5 tw-py-3 tw-text-xs tw-uppercase tw-tracking-wider",
  sm: "tw-px-5.5 tw-py-3.5 tw-text-sm tw-uppercase tw-tracking-wider",
  base: "tw-px-6 tw-py-4 tw-text-base",
  lg: "tw-px-7 tw-py-4.5 tw-text-lg",
  xl: "tw-px-8 tw-py-5 tw-text-xl",
};

export interface ButtonProps {
  color?: keyof typeof colors;
  size?: keyof typeof sizes;
}

const Button = classed.button<ButtonProps>((props) => [
  "tw-font-semibold tw-uppercase tw-transition-colors tw-rounded tw-outline-none tw-leading-none tw-focus-visible:ring-4 tw-cursor-pointer tw-select-none tw-disabled:cursor-default tw-disabled:opacity-30 tw-disabled:pointer-events-none",
  colors[props.color ?? "none"],
  sizes[props.size ?? "tw-xs"],
]);

export default Button;
