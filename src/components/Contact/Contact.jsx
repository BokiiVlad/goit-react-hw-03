import { BsTelephoneFill, BsPersonFill } from "react-icons/bs";
import css from "./Contact.module.css";

export default function Contact({ contacts: { number, name }, id }) {
  return (
    <li className={css.listItem} key={id}>
      <div>
        <div className={css.firstField}>
          <BsPersonFill size="22" />
          <p className={css.listText}>{name}</p>
        </div>
        <div className={css.listField}>
          <BsTelephoneFill size="18" />
          <p className={css.listText}>{number}</p>
        </div>
      </div>
      <button className={css.contBut} type="button">
        Delete
      </button>
    </li>
  );
}
