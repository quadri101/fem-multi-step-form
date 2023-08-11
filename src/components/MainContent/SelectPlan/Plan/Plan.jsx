import React from "react";
import { changePrice, changePlan } from "../../../../../features/plan/plan";
import { useDispatch, useSelector } from "react-redux";

function Plan({ name, price, image }) {
	const dispatch = useDispatch();

	function changePlanType() {
		dispatch(changePlan(name));
		dispatch(changePrice(price));
	}

	const { recurrence, plan } = useSelector((state) => state.plan);
	const isSelectedPlan = plan === name;

	return (
		<div
			className={`plan ${isSelectedPlan ? "SelectedPlan" : ""}`}
			onClick={changePlanType}>
			<img src={image} alt={name} />
			<p>{name}</p>
			<p>
				${price}/{recurrence === "monthly" ? "mo" : "yr"}
			</p>
		</div>
	);
}

export default Plan;
