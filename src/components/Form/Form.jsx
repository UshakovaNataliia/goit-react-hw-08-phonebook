import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addContactItem } from '../../redux/contactList/contactsOperation';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import formStyles from './Form.module.css';
import alertStyles from './alert.module.css';
import styles from '../App/App.module.css';
import {getContacts} from '../../redux/contactList/contactsSelectors';

class Form extends Component { 
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  state = {
    name: '',
    number: '',
    alert: false,
  };
  inputChange = e => {
    const { name, value } = e.target; // свойства инпута (данные из консоли: name="number" value={number})
    this.setState({ [name]: value }); // (ключ: значение) связали введение данных в оба инпута со стейтом 
  };
  addContact = e => {
    e.preventDefault();
    if (this.props.contacts.some(el => el.name === this.state.name || el.name.toLowerCase() === this.state.name)) {
      this.setState({ alert: true });
      setTimeout(() => {
        this.setState({ alert: false });
    this.setState({ name: '', number: '' });

      }, 3000);
    } else {
    this.props.onSubmit(this.state); // прокинули пропсы для передачи данных в App
    this.setState({ name: '', number: '' });
    };
  };

  render() {
    const { name, number, alert } = this.state;
    return (
      <>
         <CSSTransition
           appear={alert}
           in={alert} 
           timeout={500}
           classNames={alertStyles}
           unmountOnExit
         >
          <p className={styles.alert}>Contact {name} already exists!</p>
         </CSSTransition>
        <form onSubmit={this.addContact} className={formStyles.form}>
          <label className={formStyles.label}>
            Name
            <input
              className={formStyles.input}
              type="text"
              name="name"
              value={name}
              onChange={this.inputChange}
              required
            />
          </label>
          <label className={formStyles.label}>
            Number
            <input
              className={formStyles.input}
              type="number"
              name="number"
              value={number}
              onChange={this.inputChange}
              required
            />
          </label>
          <button type="submit" className={formStyles.button}>Add contact <br /> {name}</button>
      </form>
      </>
    );
  }
};

const mapStateToProps = (state) => ({
  contacts: getContacts(state)
});

const mapDispatchToProps = {
  onSubmit: addContactItem
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);

Form.propTypes = {
  state: PropTypes.object,
};