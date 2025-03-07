import { Formik, Form, Field } from "formik";
import { useId } from "react";
import css from "./ContactForm.module.css";

export default function ContactForm() {
  const nameId = useId();
  const numberId = useId();
  const standardValue = {
    id: "",
    name: "",
    number: "",
  };

  return (
    <Formik initialValues={standardValue} onSubmit={() => {}}>
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
        </div>
      </Form>
    </Formik>
  );
}
