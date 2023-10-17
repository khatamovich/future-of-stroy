import * as yup from "yup";

export const schema = yup.object().shape({
	fullName: yup
		.string()
		.required("Поле обязательно к заполнению")
		.min(5, "Введите не мнее 5 символов")
		.max(25, "Введите мнее 50 символов"),
	phone: yup
		.string()
		.matches(
			/(?:\+\([9]{2}[8]\)[0-9]{2} [0-9]{3}-[0-9]{2}-[0-9]{2})/,
			"Введен неверный формат"
		)
		.required("Пожалуйста введите номер телефона"),
});
