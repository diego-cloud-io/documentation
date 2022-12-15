import React from "react";
import Logo from "./Logo";

export default function NavHeader() {
	return (
		<nav className="bg-purple-900 w-full h-full flex justify-center items-center">
			<Logo color="light" className="h-8" />
		</nav>
	);
}
