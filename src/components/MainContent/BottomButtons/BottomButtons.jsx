import { Stack, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";

function BottomButtons({ nextPage, canGoBack }) {
	const navigate = useNavigate();
	return (
		<Stack margin={"2rem"} direction={"row"} justifyContent={"space-between"}>
			{canGoBack ? <Button onClick={() => navigate(-1)}>Go back</Button> : null}
			<Button
				onClick={() => navigate(`/${nextPage}`)}
				color="success"
				variant="contained">
				Next Page
			</Button>
		</Stack>
	);
}

export default BottomButtons;
