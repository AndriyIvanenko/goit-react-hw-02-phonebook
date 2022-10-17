import React from 'react';
import { Contact, Button } from './ContactsItem.styled';

class ContactsItem extends React.Component {
  state = {
    idForDelete: '',
  };

  //   static defaultProps = {
  //     contact: {
  //       id: 'id',
  //       name: 'name',
  //       number: 'number',
  //     },
  //   };

  changeState = () => {
    this.setState({ idForDelete: this.props.contact.id });
    this.props.upDeleteId(this.props.contact.id);
  };

  render() {
    return (
      <Contact>
        <span>
          {this.props.contact.name}:&nbsp;&nbsp;{this.props.contact.number}
        </span>
        <Button type="button" onClick={this.changeState}>
          delete
        </Button>
      </Contact>
    );
  }
}

export default ContactsItem;
