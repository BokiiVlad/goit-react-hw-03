import Contact from "../Contact/Contact";

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul>
      {contacts.map((el) => {
        return <Contact key={el.id} contacts={el} onDelete={onDelete} />;
      })}
    </ul>
  );
}
