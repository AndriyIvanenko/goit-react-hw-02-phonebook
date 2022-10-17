import React from 'react';
import { nanoid } from 'nanoid';
import Form from 'components/Form/Form';
import { Contacts } from '../Contacts/Contacts';
import { Section, H1, H2 } from './App.styled';
import Filter from 'components/Search/Filter';

class PhoneBook extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    const newContact = [{}];
    newContact[0].name = data.name;
    newContact[0].number = data.number;
    newContact[0].id = nanoid();
    const updatedContacts = this.state.contacts.concat(newContact);
    this.setState({ contacts: updatedContacts });
  };

  filterChangeHandler = data => {
    this.setState({ filter: data });
  };

  filterInputId = nanoid();

  render() {
    return (
      <Section>
        <H1>Phonebook</H1>
        <Form onFormSubmit={this.formSubmitHandler}></Form>
        <H2>Contacts</H2>
        <Filter onFilterChange={this.filterChangeHandler}></Filter>
        <Contacts
          contacts={this.state.contacts}
          filter={this.state.filter}
        ></Contacts>
      </Section>
    );
  }
}

export default PhoneBook;
