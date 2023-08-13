import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { changeUser } from "../../../../features/info/userinfo";

import "./YourInfo.css";
import * as Yup from "yup";
import { useRef } from "react";
import { Button } from "@mui/material";
import BottomButtons from "../BottomButtons/BottomButtons";

function YourInfo() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const userData = useSelector((state) => state.user);
	const phoneRegExp = /\d/;
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

			<Formik
				innerRef={formRef}
				initialValues={userData}
				validationSchema={Yup.object({
					name: Yup.string().required("This field is required"),
					email: Yup.string()
						.email("Invalid email address")
						.required("This field is required"),
					phoneNumber: Yup.string()
						.matches(phoneRegExp, "Phone number is not valid")
						.required("This field is required"),
				})}
				onSubmit={(state) => {
					dispatch(changeUser(state));
					navigate("/selectPlan");
				}}>
				<Form className="page-content">
					<div className="label-and-error">
						<label htmlFor="name">Name</label>
						<ErrorMessage
							component={"p"}
							className="error-message"
							name="name"
						/>
					</div>
					<Field name="name" type="text" />

					<div className="label-and-error">
						<label htmlFor="email">Email Address</label>
						<ErrorMessage
							component={"p"}
							className="error-message"
							name="email"
						/>
					</div>
					<Field name="email" type="email" />

					<div className="label-and-error">
						<label htmlFor="phoneNumber">Phone Number</label>
						<ErrorMessage
							component={"p"}
							className="error-message"
							name="phoneNumber"
						/>
					</div>
					<Field name="phoneNumber" type="text" />
				</Form>
			</Formik>
			<BottomButtons onClick={handleSubmit} />
		</div>
	);
}

export default YourInfo;
