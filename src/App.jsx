import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
	const [currentStep, setCurrentStep] = useState(1);
	return (
		<div className="App grid">
			{/* my sidebar */}
			<Sidebar currentStep={currentStep} />

			{/* Outlet Component for children of the App i.e. the steps */}
			<Outlet context={[currentStep, setCurrentStep]} />
		</div>
	);
}

export default App;
