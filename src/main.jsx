import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import router from "./routes/routes.jsx";
import store from "../app/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		{/* State Provider */}
		<Provider store={store}>
			{/* Router Provider */}
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
