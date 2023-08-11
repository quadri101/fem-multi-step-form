import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

const initialState = {
	includedAddons: [],
};

const addonSlice = createSlice({
	name: "addOns",
	initialState,
	reducers: {
		modifyAddons: (state, action) => {
			const newAddon = action.payload;

			const currentAddOns = state.includedAddons;

			/* 
				Find the index of the new Addon
				returns -1 if the addon is originally not included.
				we can use this information to know if it needs to be added or removed
				ie index == -1 means addon was not there, any other value is the index of the item 
			*/
			const addOnIndex = _.findIndex(
				currentAddOns,
				(addon) => addon.title === newAddon.title
			);
			/*
			if index == -1 push the new item into the array,
			else remove the item at the returned index
			*/
			if (addOnIndex === -1) {
				state.includedAddons.push(newAddon);
			} else {
				state.includedAddons.splice(addOnIndex, 1);
			}
		},
	},
});

export default addonSlice.reducer;
export const { modifyAddons } = addonSlice.actions;
