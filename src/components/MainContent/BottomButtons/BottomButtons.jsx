import { useNavigate } from "react-router-dom";

import "./BottomButtons.css";

function BottomButtons({ nextPage, canGoBack, onClick, confirm }) {
	const navigate = useNavigate();
	const goToNextPage = () => navigate(`/${nextPage}`);
	return (
		<div className="navigation-buttons grid space-between">
			{canGoBack ? (
				<button
					type="button"
					className="back-button color-cool-gray"
					onClick={() => navigate(-1)}>
					Go back
				</button>
			) : null}
			<button
				type="button"
				onClick={onClick || goToNextPage}
				className={`navigation-button color-alabaster ${
					confirm ? "bg-purplish-blue" : " bg-dark-blue"
				}`}>
				{confirm ? "Confirm" : "Next Page"}
			</button>
		</div>
	);
}

export default BottomButtons;
