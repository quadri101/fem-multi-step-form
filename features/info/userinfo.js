import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	name: "Quadri Shittu",
	email: "shittuquadri41@gmail.com",
	phoneNumber: "123456",
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
