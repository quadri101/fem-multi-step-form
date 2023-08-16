import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	currentStep: 1,
};

const sidebarSlice = createSlice({
	name: "step",
	initialState,
	reducers: {
		changeCurrentStep: (state, action) => {
			state.currentPage = action.payload;
		},
	},
});

export default sidebarSlice.reducer;

export const { changeCurrentStep } = sidebarSlice.actions;
