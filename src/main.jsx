import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../app/store.js";
import App from "./App.jsx";
import YourInfo from "./components/MainContent/YourInfo/YourInfo.jsx";
import SelectPlan from "./components/MainContent/SelectPlan/SelectPlan.jsx";
import Addons from "./components/MainContent/AddOns/AddOns.jsx";
import Summary from "./components/MainContent/Summary/Summary.jsx";

const router = createMemoryRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				index: true,
				element: <YourInfo />,
			},
			{
				path: "selectplan",
				element: <SelectPlan />,
			},
			{
				path: "addons",
				element: <Addons />,
			},
			{
				path: "/summary",
				element: <Summary />,
			},
		],
	},
]);
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
