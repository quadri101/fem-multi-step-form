import "./Step.css";

function Step({ stepNumber, children, currentStep }) {
	const isCurrentStep = currentStep === stepNumber;
	return (
		<div className="Step">
			<p className={`Stepnumber ${isCurrentStep && "current-step"}`}>
				{stepNumber}
			</p>
			<div className="Stepcontent">
				<p className="Stepdescription">STEP {stepNumber}</p>
				<p className="Stepname">{children}</p>
			</div>
		</div>
	);
}

export default Step;
