import React from "react";
import "../styles/components.scss";

const logo = () => {
	return (
		<div className="mb-16 flex justify-center w-full">
			<img src="/logo.svg" alt="Logo" className="authLogo" />
		</div>
	);
};

export default logo;
