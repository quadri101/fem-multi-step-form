import React from "react";
import AddOn from "./AddOn/AddOn";
import BottomButtons from "../BottomButtons/BottomButtons";

import "./AddOns.css";

const addons = [
	{
		title: "Online service",
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
			<h1 className="page-header">Pick add-ons</h1>
			<p className="page-description">
				Add-ons help enhance your gaming experience.
			</p>
			<div className="page-content addons">
				{addons.map((addon) => (
					<AddOn key={addon.id} {...addon} />
				))}
			</div>

			<BottomButtons canGoBack nextPage={"summary"}></BottomButtons>
		</div>
	);
}

export default AddOns;
