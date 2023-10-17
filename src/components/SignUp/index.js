import StyledSignUp, { Message } from "./SignUp.styled";
import { Formik, Form } from "formik";
import { send } from "@emailjs/browser";
import { useState } from "react";

// importing necessary components
import Field from "./Field";

// importing validation schema
import { schema } from "./validation";

const initialValues = {
  fullName: "",
  phone: "",
  details: "",
};

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(null);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);

  const sendEmail = (values, resetForm) => {
    setIsLoading(true);
    send("service_5j76yil", "template_5j9h7ik", values, "rJ50KExoXgFizHrAb")
      .then((result) => {
        setIsLoading(false);
        setMessage("Ваш запрос принят, ждите звонка");
        setStatus(true);
        resetForm();
        setTimeout(() => {
          setIsLoading(null);
          setStatus(null);
        }, 5000);
      })
      .catch((error) => {
        setIsLoading(false);
        setMessage("Произошла ошибка, попробуйте позже");
        setStatus(false);

        setTimeout(() => {
          setIsLoading(null);
          setStatus(null);
        }, 10000);
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={({ fullName, phone, details }, { resetForm }) => {
        const filteredValues = {
          fullName: fullName.trim(),
          phone: phone.trim(),
          details: details.trim(),
        };

        sendEmail(filteredValues, resetForm);
      }}
    >
      {(props) => (
        <StyledSignUp>
          <Form>
            <fieldset>
              <Field
                name="fullName"
                label="Ваше полное имя"
                type="text"
                placeholder="Андрей Николаевич"
              />
              <Field
                name="phone"
                label="Ваш номер телефона"
                type="text"
                placeholder="+998 (99) 701-17-71"
              />
              <Field
                name="details"
                label="Ваше сообщение"
                placeholder="Опишите подробности..."
              />
            </fieldset>

            <input type="submit" value="Отправить" />

            <p>
              Нажатием данной кнопки вы соглашаетесь на обработку ваших
              персональных данных.
            </p>

            {status === true && !isLoading && (
              <Message success={status}>{message}</Message>
            )}
            {status === false && !isLoading && (
              <Message success={status}>{message}</Message>
            )}
          </Form>
        </StyledSignUp>
      )}
    </Formik>
  );
};

export default SignUp;
