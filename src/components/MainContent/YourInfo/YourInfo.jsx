import { useRef } from "react";
import { useSelector } from "react-redux";

import BottomButtons from "../BottomButtons/BottomButtons";
import InputForm from "./InputForm/InputForm";

import "./YourInfo.css";

function YourInfo() {
	const userData = useSelector((state) => state.user);
	const formRef = useRef();

	const handleSubmit = () => {
		if (formRef.current) {
			formRef.current.handleSubmit();
		}
	};

	return (
		<div className="MainContent Your-Info">
			<h1 className="page-header">Personal info</h1>

			<p className="page-description">
				Please provide your name, email address, and phone number
			</p>

			<InputForm formRef={formRef} userData={userData} />

			<BottomButtons onClick={handleSubmit} />
		</div>
	);
}

export default YourInfo;
