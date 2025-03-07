import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import contacts from "./contacts.json";

import { useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState(contacts);
  const [filter, setFilter] = useState("");

  // Функція додовання контакту
  const addContact = (newContact) => {
    setList((prevContact) => {
      return [...prevContact, newContact];
    });
  };
  // Видалення контакту
  const deleteContact = (idCard) => {
    setList((prevContact) => prevContact.filter((el) => el.id !== idCard));
  };

  const findContact = list.filter(
    (el) =>
      el.name.toLowerCase().includes(filter.toLocaleLowerCase()) ||
      el.number.includes(filter)
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={findContact} onDelete={deleteContact} />
    </div>
  );
}

export default App;
