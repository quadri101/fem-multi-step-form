import { Checkbox, Grid, Stack } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { modifyAddons } from "../../../../../features/addons/addons";

function AddOn(props) {
	const dispatch = useDispatch();
	const { title, description, price } = props;
	const { includedAddons } = useSelector((state) => state.addOns);

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

	return (
		<Grid container className="AddOn" alignItems={"center"} onClick={setAddons}>
			<Grid xs={2} item>
				<Checkbox checked={isSelected} />
			</Grid>
			<Grid xs={8} item>
				<Stack>
					<p className="title">{title}</p>
					<p className="description"> {description}</p>
				</Stack>
			</Grid>
			<p>{price}</p>
		</Grid>
	);
}

export default AddOn;
