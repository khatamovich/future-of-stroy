import StyledField from "./Field.styled";
import { useField } from "formik";
import NumberFormat from "react-number-format";

const Field = ({ label, ...props }) => {
	const [field, meta] = useField(props);

	if (props.name.includes("phone"))
		return (
			<StyledField>
				<label>{label}</label>
				<NumberFormat
					className="field__input"
					type="text"
					format="+(998)## ###-##-##"
					mask="-"
					allowEmptyFormatting
					{...props}
					{...field}
				/>
				{meta.touched && meta.error && <span>{meta.error}</span>}
			</StyledField>
		);

	if (props.name.includes("details"))
		return (
			<StyledField>
				<label>{label}</label>
				<textarea {...field} {...props} />
				{meta.touched && meta.error && <span>{meta.error}</span>}
			</StyledField>
		);

	return (
		<StyledField>
			<label>{label}</label>
			<input {...field} {...props} />
			{meta.touched && meta.error && <span>{meta.error}</span>}
		</StyledField>
	);
};

export default Field;
