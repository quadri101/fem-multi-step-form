import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { changeUser } from "../../../../features/info/userinfo";

import "./YourInfo.css";
import * as Yup from "yup";
import { useRef } from "react";
import { Button } from "@mui/material";

function YourInfo() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const userData = useSelector((state) => state.user);
	const phoneRegExp = /\D/;
	const formRef = useRef();

	const handleSubmit = () => {
		if (formRef.current) {
			formRef.current.handleSubmit();
		}
	};
	return (
		<div className="MainContent info-form">
			<h1>Personal info</h1>
			<p>Please provide your name, email address, and phone number</p>

			<Formik
				innerRef={formRef}
				initialValues={userData}
				validationSchema={Yup.object({
					name: Yup.string().required("This field is required"),
					email: Yup.string()
						.email("Invalid email address")
						.required("This field is required"),
					phoneNumber: Yup.string().matches(
						phoneRegExp,
						"Phone number is not valid"
					),
				})}
				onSubmit={(state) => {
					dispatch(changeUser(state));
					navigate("/selectPlan");
				}}>
				<Form className="info-form">
					<label htmlFor="name">Name</label>
					<Field name="name" type="text" />
					<ErrorMessage name="name" />

					<label htmlFor="email">Email</label>
					<Field name="email" type="email" />
					<ErrorMessage name="email" />

					<label htmlFor="phoneNumber">Phone Number</label>
					<Field name="phoneNumber" type="text" />
					<ErrorMessage name="phoneNumber" />
				</Form>
			</Formik>

			<Button type="button" onClick={handleSubmit}>
				Next Step
			</Button>
		</div>
	);
}

export default YourInfo;
