import { useEffect } from "react";
import { Divider } from "@mui/material";
import { useSelector } from "react-redux";
import { Link, useOutletContext } from "react-router-dom";

import "./Summary.css";

import BottomButtons from "../BottomButtons/BottomButtons";
function Summary() {
	const [currentStep, setCurrentStep] = useOutletContext();

	useEffect(() => {
		setCurrentStep(4);
	}, [currentStep]);

	const { recurrence, plan, price } = useSelector((state) => state.plan);
	const { includedAddons } = useSelector((state) => state.addOns);

	function reducer(prevValue, newAddon) {
		return prevValue + newAddon.price;
	}
	function calculateTotalPrice(basePrice, addons, recurrence) {
		let addonsPrice = addons.reduce(reducer, 0);
		if (recurrence === "yearly") addonsPrice *= 10;
		return basePrice + addonsPrice;
	}

	const totalPrice = calculateTotalPrice(price, includedAddons, recurrence);
	const recurrenceAbbrevation = recurrence === "monthly" ? "mo" : "yr";
	return (
		<div className="MainContent">
			<h1 className="page-header">Finishing Up</h1>
			<p className="page-description">
				Double-check everything looks OK before confirming
			</p>

			<div className="page-content">
				<div className="summary bg-magnolia grid">
					<div className="summary-plan grid">
						<p className="summary-plan-recurrence capitalize color-dark-blue fw-700">
							{plan} ({recurrence})
						</p>
						<Link to={"/selectplan"} className="change-link">
							Change
						</Link>
						<p className="summary-price fw-500 color-dark-blue">
							${price}/{recurrenceAbbrevation}
						</p>
					</div>

					{/* Addons and the Divider */}
					{!!includedAddons.length && (
						<>
							<Divider />
							<div className="included-addons grid">
								{includedAddons.map((addon) => (
									<div key={addon.id} className="flex space-between">
										<p className="color-cool-gray fs-small">{addon.title}</p>
										<p className="summary-addon-price">
											+$
											{recurrence === "monthly"
												? addon.price
												: addon.price * 10}
											/{recurrenceAbbrevation}
										</p>
									</div>
								))}
							</div>
						</>
					)}
				</div>
				<div className="flex space-between summary-total">
					<p className="fs-small color-cool-gray">
						Total (per {recurrence === "monthly" ? "month" : "year"}){" "}
					</p>
					<p className="fs-large color-purplish-blue fw-700">
						+${totalPrice}/{recurrenceAbbrevation}
					</p>
				</div>
			</div>

			<BottomButtons canGoBack confirm nextPage={"completed"} />
		</div>
	);
}

export default Summary;
