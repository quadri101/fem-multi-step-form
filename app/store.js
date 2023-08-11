import { configureStore } from "@reduxjs/toolkit";
import userinfo from "../features/info/userinfo";
import plan from "../features/plan/plan";
import addons from "../features/addons/addons";

const store = configureStore({
	reducer: {
		user: userinfo,
		plan: plan,
		addOns: addons,
	},
});

export default store;
