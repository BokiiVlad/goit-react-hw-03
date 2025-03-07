import { Formik, Form, Field } from "formik";
import { useId } from "react";
import css from "./ContactForm.module.css";
import { nanoid } from "nanoid";

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

  return (
    <Formik initialValues={standardValue} onSubmit={handleSubmit}>
      <Form className={css.formField}>
        <div className={css.formPiece}>
          <label htmlFor={nameId}>Name</label>
          <Field className={css.inpField} name="name" id={nameId}></Field>
        </div>
        <div className={css.formPiece}>
          <label htmlFor={numberId}>Number</label>
          <Field
            className={css.inpField}
            name="number"
            id={numberId}
            type="tel"
          ></Field>
          <button className={css.searchBut} type="submit">
            Add contact
          </button>
        </div>
      </Form>
    </Formik>
  );
}
