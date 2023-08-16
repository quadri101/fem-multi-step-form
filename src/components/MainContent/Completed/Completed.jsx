import "./Completed.css";
function Completed() {
	return (
		<div className="Completed grid ">
			<img src="./images/icon-thank-you.svg" alt="" />
			<h1 className="color-dark-blue">Thank you!</h1>
			<p className="color-cool-gray completed-description">
				Thanks for confirming your subscription! We hope you have fun using our
				platform. If you ever need suport, please feel free to email us at
				support@loremgaming.com
			</p>
		</div>
	);
}

export default Completed;
