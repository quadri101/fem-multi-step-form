import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeUser } from "../../../../../features/info/userinfo";

function InputForm({ formRef, userData }) {
	const phoneRegExp = /[+]\d/;
	const navigate = useNavigate();
	const dispatch = useDispatch();

	return (
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
				<div className="flex space-between">
					<label htmlFor="name">Name</label>
					<ErrorMessage
						component="p"
						className="color-red fw-500 fs-small"
						name="name"
					/>
				</div>
				<Field placeholder={"e.g Stephen King"} name="name" type="text" />

				<div className="flex space-between">
					<label htmlFor="email">Email Address</label>
					<ErrorMessage
						component="p"
						className="color-red fw-500 fs-small"
						name="email"
					/>
				</div>
				<Field
					placeholder={"e.g stephenking@lorem.com"}
					name="email"
					type="email"
				/>

				<div className="flex space-between">
					<label htmlFor="phoneNumber">Phone Number</label>
					<ErrorMessage
						component="p"
						className="color-red fw-500 fs-small"
						name="phoneNumber"
					/>
				</div>
				<Field placeholder={"e.g +1234567890"} name="phoneNumber" type="text" />
			</Form>
		</Formik>
	);
}

export default InputForm;
