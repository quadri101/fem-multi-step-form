import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	name: "",
	email: "",
	phoneNumber: "",
};
const userInfoSlice = createSlice({
	name: "userInfo",
	initialState,
	reducers: {
		changeUser: (state, action) => (state = action.payload),
	},
});

export default userInfoSlice.reducer;
export const { changeUser } = userInfoSlice.actions;
