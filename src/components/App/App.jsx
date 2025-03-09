import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import contacts from "../../contacts.json";

import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // Стани
  const [list, setList] = useState(() => {
    const localList = localStorage.getItem("contacts");
    if (localList) {
      return JSON.parse(localList);
    }
    return contacts;
  });
  const [filter, setFilter] = useState(() => {
    const localFilter = localStorage.getItem("filter");
    if (localFilter) {
      return JSON.parse(localFilter);
    }
    return "";
  });

  // Запис в storage
  useEffect(() => {
    localStorage.setItem("filter", JSON.stringify(filter));
    localStorage.setItem("contacts", JSON.stringify(list));
  }, [filter, list]);

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
