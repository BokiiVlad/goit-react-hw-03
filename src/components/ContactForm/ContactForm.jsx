import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import css from "./ContactForm.module.css";
import { nanoid } from "nanoid";
import * as Yup from "yup";

export default function ContactForm({ addContact }) {
  const nameId = useId();
  const numberId = useId();

  const standardValue = {
    name: "",
    number: "",
  };

  const handleSubmit = (value, actions) => {
    const newContact = { id: nanoid(), ...value };
    addContact(newContact);
    actions.resetForm();
  };

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(5, "Enter at least 5 letters")
      .max(50, "Maximum letters 50")
      .required("This field is required"),
    number: Yup.string()
      .min(10, "Enter at least 10 digits")
      .max(13, "Maximum digits 13")
      .required("This field is required"),
  });

  return (
    <Formik
      initialValues={standardValue}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.formField}>
        <div className={css.formPiece}>
          <label htmlFor={nameId}>Name</label>
          <Field className={css.inpField} name="name" id={nameId}></Field>

          <ErrorMessage name="name" component="span" />
        </div>
        <div className={css.formPiece}>
          <label htmlFor={numberId}>Number</label>
          <Field
            className={css.inpField}
            name="number"
            id={numberId}
            type="tel"
          ></Field>

          <ErrorMessage name="number" component="span" />
          <button className={css.searchBut} type="submit">
            Add contact
          </button>
        </div>
      </Form>
    </Formik>
  );
}
