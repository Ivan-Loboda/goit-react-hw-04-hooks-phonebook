import { useState, useEffect } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter'
import ContactList from './components/ContactList'

function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('')

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    switch (name) {

      case 'filter':
        setFilter(value);
        break;

      default:
        break;
    }
  };

  const addContact = (name, number) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    }
    const checkedName = contacts.find(contact => name.toLowerCase() === contact.name.toLowerCase());
    checkedName ? alert(`${name} is already in contacts!`) : setContacts([...contacts, contact])
  }

  const filterContact = () => {
    // const { contacts, filter } = this.state;
    return contacts.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
  }

  const removeContact = (id) => { setContacts(contacts.filter(item => item.id !== id)) }

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter inputChange={handleInputChange} filter={filter} />
      <ContactList contactsData={filterContact()} onRemoveContact={removeContact} />
    </>
  );
}

export default App;
