import { Stack } from "@mui/material";
import React from "react";
import AddOn from "./AddOn/AddOn";
import BottomButtons from "../BottomButtons/BottomButtons";
const addons = [
	{
		title: "Online Service",
		description: "Access to multiplayer games",
		price: 1,
		id: 0,
	},
	{
		title: "Larger storage",
		description: "Extra 1TB of cloud save",
		price: 2,
		id: 1,
	},
	{
		title: "Customizable profile",
		description: "Custom theme on your profile",
		price: 2,
		id: 2,
	},
];
function AddOns() {
	return (
		<div className="MainContent">
			<h1>Pick add-ons</h1>
			<p>Add-ons help enhance your gaming experience</p>
			<Stack>
				{addons.map((addon) => (
					<AddOn key={addon.id} {...addon} />
				))}
			</Stack>

			<BottomButtons canGoBack nextPage={"summary"}></BottomButtons>
		</div>
	);
}

export default AddOns;
