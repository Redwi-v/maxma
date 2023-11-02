import React from "react";
import ReactDOM from "react-dom/client";

import Index from "./pages/Home";

import "./index.scss";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<>
		<Toaster
			style={{
				zIndex: 999,
			}}
			position={"bottom-right"}
		/>
		<Index />
	</>,
);
