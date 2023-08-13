import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	currentPage: "yourinfo",
};

const sidebarSlice = createSlice({
	name: sidebar,
	initialState,
	reducers: {
		changeCurrentPage: (state, action) => {
			state.currentPage = action.payload;
		},
	},
});

export default sidebarSlice.reducer;

export const { changeCurrentPage } = sidebarSlice.actions;
