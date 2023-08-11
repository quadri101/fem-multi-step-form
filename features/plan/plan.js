import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	recurrence: "monthly",
	plan: "arcade",
	price: 9,
};

const planSlice = createSlice({
	name: "plan",
	initialState,
	reducers: {
		changeRecurrence: (state, action) => {
			state.recurrence = action.payload;
		},
		changePlan: (state, action) => {
			state.plan = action.payload;
		},
		changePrice: (state, action) => {
			state.price = action.payload;
		},
	},
});

export default planSlice.reducer;
export const { changeRecurrence, changePlan, changePrice } = planSlice.actions;
