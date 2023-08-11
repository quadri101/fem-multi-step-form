import React from "react";

import { changeRecurrence, changePrice } from "../../../../features/plan/plan";
import { useDispatch, useSelector } from "react-redux";

import Plan from "./Plan/Plan";

import "./SelectPlan.css";
import CustomizedSwitch from "./CustomizedSwitch/CustomizedSwitch";
import BottomButtons from "../BottomButtons/BottomButtons";

function SelectPlan() {
	const yearlyPrices = {
		arcade: 90,
		advanced: 120,
		pro: 150,
	};

	const monthlyPrices = {
		arcade: 9,
		advanced: 12,
		pro: 15,
	};

	const dispatch = useDispatch();
	const { recurrence, plan } = useSelector((state) => state.plan);

	const handleSwitchChange = () => {
		if (recurrence === "monthly") {
			dispatch(changeRecurrence("yearly"));
			dispatch(changePrice(yearlyPrices[plan]));
		} else {
			dispatch(changeRecurrence("monthly"));
			dispatch(changePrice(monthlyPrices[plan]));
		}
	};

	const checked = recurrence === "yearly";

	return (
		<div className="MainContent">
			<h1>Select your plan</h1>
			<p>You have the option of monthly or yearly billing</p>

			<div className="plans">
				<Plan
					name={"arcade"}
					price={
						recurrence === "yearly" ? yearlyPrices.arcade : monthlyPrices.arcade
					}
					image={"/images/icon-arcade.svg"}
				/>

				<Plan
					name={"advanced"}
					price={
						recurrence === "yearly"
							? yearlyPrices.advanced
							: monthlyPrices.advanced
					}
					image={"/images/icon-advanced.svg"}
				/>

				<Plan
					name={"pro"}
					price={recurrence === "yearly" ? yearlyPrices.pro : monthlyPrices.pro}
					image={"/images/icon-pro.svg"}
				/>
			</div>

			<div
				className=""
				style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
				<p>monthly</p>
				<CustomizedSwitch checked={checked} onChange={handleSwitchChange} />
				<p>yearly</p>
			</div>

			<BottomButtons canGoBack nextPage={"addons"} />
		</div>
	);
}

export default SelectPlan;
