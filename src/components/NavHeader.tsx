import React from "react";
import Logo from "./Logo";

export default function NavHeader() {
  return (
    <nav className="bg-purple-900 w-full h-20 flex flex-col justify-center items-center">
      <Logo color="dark" className="h-8" />
      Reduce cycle time on cloud native delivery
    </nav>
  );
}
