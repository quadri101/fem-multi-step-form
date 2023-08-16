import React, { useEffect } from "react";
import { changeRecurrence, changePrice } from "../../../../features/plan/plan";
import { useDispatch, useSelector } from "react-redux";
import Plan from "./Plan/Plan";
import CustomizedSwitch from "./CustomizedSwitch/CustomizedSwitch";
import BottomButtons from "../BottomButtons/BottomButtons";
import "./SelectPlan.css";
import { useOutletContext } from "react-router-dom";
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

function SelectPlan() {
	const [currentStep, setCurrentStep] = useOutletContext();

	useEffect(() => {
		setCurrentStep(2);
	}, [currentStep]);

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
			<h1 className="page-header">Select your plan</h1>
			<p className="page-description">
				You have the option of monthly or yearly billing
			</p>

			<div className="plans page-content grid">
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
				<div className="custom-switch flex bg-magnolia">
					<p
						className={`capitalize fw-500 ${
							!checked ? "color-dark-blue" : "color-cool-gray"
						}`}>
						monthly
					</p>
					<CustomizedSwitch checked={checked} onChange={handleSwitchChange} />
					<p
						className={`capitalize fw-500 ${
							checked ? "color-dark-blue" : "color-cool-gray"
						}`}>
						yearly
					</p>
				</div>
			</div>

			<BottomButtons canGoBack nextPage={"addons"} />
		</div>
	);
}

export default SelectPlan;
