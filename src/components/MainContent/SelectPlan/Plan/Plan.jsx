import React from "react";
import { changePrice, changePlan } from "../../../../../features/plan/plan";
import { useDispatch, useSelector } from "react-redux";

import "./Plan.css";
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
			<p className="name capitalize color-dark-blue fw-500">{name}</p>
			<p className="color-cool-gray">
				${price}/{recurrence === "monthly" ? "mo" : "yr"}
			</p>
			{recurrence === "yearly" && (
				<p className="fw-500 fs-small color-dark-blue free-offer">
					2 months free
				</p>
			)}
		</div>
	);
}

export default Plan;
