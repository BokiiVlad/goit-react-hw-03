import Contact from "../Contact/Contact";
import contacts from "../../contacts.json";

export default function ContactList() {
  return (
    <ul>
      {contacts.map((el) => {
        return <Contact key={el.id} contacts={el} />;
      })}
    </ul>
  );
}
