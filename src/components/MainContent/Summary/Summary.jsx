import { Divider } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import BottomButtons from "../BottomButtons/BottomButtons";

import "./Summary.css";
function Summary() {
	const { recurrence, plan, price } = useSelector((state) => state.plan);
	const { includedAddons } = useSelector((state) => state.addOns);

	return (
		<div className="MainContent">
			<h1 className="page-header">Finishing Up</h1>
			<p className="page-description">
				Double-check everything looks OK before confirming
			</p>

			<div>
				<div>
					<p>
						<span>{plan}</span> ({recurrence})
					</p>
					<p className="">Change</p>${price}
				</div>

				{!!includedAddons.length && (
					<div className="included-addons">
						<Divider variant="middle" />
						{includedAddons.map((addon) => (
							<div direction={"row"} justifyContent={"space-between"}>
								<p>{addon.title}</p>
								<p>{addon.price}</p>
							</div>
						))}
					</div>
				)}
				<p>Total (per year) $120/yr</p>
			</div>

			<BottomButtons canGoBack nextPage={"completed"} />
		</div>
	);
}

export default Summary;
