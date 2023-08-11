import * as React from "react";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

const CustomizedSwitch = styled(Switch)(({ theme }) => ({
	width: 44,
	height: 24,
	padding: 0,
	display: "flex",
	"&:active": {
		"& .MuiSwitch-thumb": {
			width: 15,
		},
		"& .MuiSwitch-switchBase.Mui-checked": {
			transform: "translateX(18px)",
		},
	},
	"& .MuiSwitch-switchBase": {
		padding: 4.5,
		"&.Mui-checked": {
			transform: "translateX(18px)",
			color: "#fff",
			"& + .MuiSwitch-track": {
				opacity: 1,
				backgroundColor:
					theme.palette.mode === "dark" ? "rgba(2,41,90,1)" : "rgba(2,41,90,1)",
			},
		},
	},
	"& .MuiSwitch-thumb": {
		boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
		width: 15,
		height: 15,
		borderRadius: 15,
		transition: theme.transitions.create(["width"], {
			duration: 100,
		}),
	},
	"& .MuiSwitch-track": {
		borderRadius: 200 / 2,
		opacity: 1,
		backgroundColor:
			theme.palette.mode === "dark" ? "rgba(2,41,90,1)" : "rgba(2,41,90,1)",
		boxSizing: "border-box",
	},
}));

export default CustomizedSwitch;
