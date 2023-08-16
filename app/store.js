import { configureStore } from "@reduxjs/toolkit";

import userinfo from "../features/info/userinfo";
import plan from "../features/plan/plan";
import addons from "../features/addons/addons";
import step from "../features/step/step";

const store = configureStore({
	reducer: {
		user: userinfo,
		plan: plan,
		addOns: addons,
		step: step,
	},
});

export default store;
