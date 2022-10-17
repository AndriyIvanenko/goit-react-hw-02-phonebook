import React from 'react';
import { Li } from './Contacts.styled';
import ContactsItem from 'components/ContactsItem/ContactsItem';

class Contacts extends React.Component {
  state = {
    idForDelete: '',
  };

  filteredContacts = this.props.contacts.filter(contact =>
    contact.name.toLowerCase().includes(this.props.filter)
  );

  upDeleteId = data => {
    // this.setState({ idForDelete: data });
    this.props.deleteContact(data);
  };

  render() {
    return (
      <ul>
        {this.filteredContacts.map(contact => (
          <Li key={contact.id}>
            <ContactsItem
              contact={contact}
              upDeleteId={this.upDeleteId}
            ></ContactsItem>
          </Li>
        ))}
      </ul>
    );
  }
}

export default Contacts;
