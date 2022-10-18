import React from 'react';
import { Li } from './Contacts.styled';
import { ContactsItem } from 'components/ContactsItem/ContactsItem';

class Contacts extends React.Component {
  static defaultProps = {
    contacts: [],
    filter: '',
    deleteContact: function () {},
  };

  filteredContacts = this.props.contacts.filter(contact =>
    contact.name.toLowerCase().includes(this.props.filter.toLowerCase())
  );

  throwDeleteId = data => {
    this.props.deleteContact(data);
  };

  render() {
    return (
      <ul>
        {this.filteredContacts.map(contact => (
          <Li key={contact.id}>
            <ContactsItem
              contact={contact}
              throwDeleteId={this.throwDeleteId}
            ></ContactsItem>
          </Li>
        ))}
      </ul>
    );
  }
}

export default Contacts;
