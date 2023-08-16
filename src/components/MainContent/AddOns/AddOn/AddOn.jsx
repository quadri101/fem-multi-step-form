import { useSelector, useDispatch } from "react-redux";
import { modifyAddons } from "../../../../../features/addons/addons";

import "./AddOn.css";
function AddOn(props) {
	const dispatch = useDispatch();

	let { title, description, price } = props;

	const { includedAddons } = useSelector((state) => state.addOns);
	const { recurrence } = useSelector((state) => state.plan);

	function addOnIsIncluded(title, includedAddons) {
		let newArray = includedAddons.filter((addon) => addon.title == title);
		if (newArray.length > 0) {
			return true;
		}
		return false;
	}
	const isSelected = addOnIsIncluded(title, includedAddons);

	function setAddons(event) {
		dispatch(modifyAddons(props));
	}

	if (recurrence !== "monthly") price *= 10;

	return (
		<div
			className={`addon grid ${isSelected ? "included" : ""}`}
			onClick={setAddons}>
			<div className={`checkbox grid ${isSelected ? "checked" : ""}`}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="12"
					height="9"
					viewBox="0 0 12 9">
					<path
						fill="none"
						stroke="#FFF"
						strokeWidth="2"
						d="m1 4 3.433 3.433L10.866 1"
					/>
				</svg>
			</div>
			<p className="addon-title fw-500 color-dark-blue fs-large">{title}</p>
			<p className="addon-description"> {description}</p>
			<p className="addon-price fw-500 color-purplish-blue">
				+${price}/{recurrence === "monthly" ? "mo" : "yr"}
			</p>
		</div>
	);
}

export default AddOn;
