import { createMemoryRouter } from "react-router-dom";

import App from "../App.jsx";
import YourInfo from "../components/MainContent/YourInfo/YourInfo.jsx";
import SelectPlan from "../components/MainContent/SelectPlan/SelectPlan.jsx";
import Addons from "../components/MainContent/AddOns/AddOns.jsx";
import Summary from "../components/MainContent/Summary/Summary.jsx";
import Completed from "../components/MainContent/Completed/Completed.jsx";

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
			{
				path: "/completed",
				element: <Completed />,
			},
		],
	},
]);

export default router;
