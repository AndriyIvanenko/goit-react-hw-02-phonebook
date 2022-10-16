import React from 'react';
import { nanoid } from 'nanoid';
import Form from 'components/Form/Form';
import { Contacts } from '../Contacts/Contacts';
import { Section, Title } from './App.styled';

class PhoneBook extends React.Component {
  state = {
    contacts: [],
    name: '',
  };

  formSubmitHandler = data => {
    const newContact = [{}];
    newContact[0].name = data.name;
    newContact[0].id = nanoid();
    const updatedContacts = this.state.contacts.concat(newContact);
    this.setState({ contacts: updatedContacts });
  };

  render() {
    return (
      <Section>
        <Title>Phonebook</Title>
        <Form onSubmit={this.formSubmitHandler}></Form>
        <Contacts contacts={this.state.contacts}></Contacts>
      </Section>
    );
  }
}

export default PhoneBook;
