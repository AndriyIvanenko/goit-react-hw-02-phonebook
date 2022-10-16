import React from 'react';
import { nanoid } from 'nanoid';
import { StyledForm, Label, Input, Button } from './Form.styled';

class Form extends React.Component {
  state = {
    name: '',
  };

  nameInputId = nanoid();

  inputChangeHandler = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  formSubmitHandler = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state);
    this.formReset();
  };

  formReset = () => {
    this.setState({ name: '' });
  };

  render() {
    return (
      <StyledForm onSubmit={this.formSubmitHandler}>
        <Label htmlFor={this.nameInputId}>Name</Label>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.name}
          onChange={this.inputChangeHandler}
          id={this.nameInputId}
        />
        <Button type="submit">Add contact</Button>
      </StyledForm>
    );
  }
}

export default Form;
