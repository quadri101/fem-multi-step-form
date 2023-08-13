import { Stack, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";

function BottomButtons({ nextPage, canGoBack, onClick }) {
	const navigate = useNavigate();
	const goToNextPage = () => navigate(`/${nextPage}`);
	return (
		<div className="navigation-buttons">
			{canGoBack ? (
				<button className="back-button" onClick={() => navigate(-1)}>
					Go back
				</button>
			) : null}
			<button onClick={onClick || goToNextPage} className="navigation-button">
				Next Page
			</button>
		</div>
	);
}

export default BottomButtons;
