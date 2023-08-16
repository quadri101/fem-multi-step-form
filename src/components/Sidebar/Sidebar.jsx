import Step from "./Step/Step";
import "./Sidebar.css";
function Sidebar({ currentStep }) {
	return (
		<div className="Sidebar flex">
			<Step currentStep={currentStep} stepNumber={1}>
				your info
			</Step>
			<Step currentStep={currentStep} stepNumber={2}>
				select plan
			</Step>
			<Step currentStep={currentStep} stepNumber={3}>
				add-ons
			</Step>
			<Step currentStep={currentStep} stepNumber={4}>
				summary
			</Step>
		</div>
	);
}

export default Sidebar;
