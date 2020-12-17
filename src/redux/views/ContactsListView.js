import React, { Component } from 'react';
import Form from '../../components/Form/Form';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import { CSSTransition } from 'react-transition-group';
import styles from './App.module.css';
import { connect } from 'react-redux';
import { setContacts } from '../contactList/contactsOperation';
import {getContacts, getFilter} from '../contactList/contactsSelectors';

class ContactListView extends Component { 
  componentDidMount() {
    this.props.setContacts();
  };

  render() {
     return (
       <>
         <CSSTransition
           appear={true}
           in
           timeout={500}
           classNames={styles}
           unmountOnExit>
          <h1 className={styles.title}>Phonebook</h1>
         </CSSTransition>

          <Form/>
          <h2>Contacts</h2>
         <CSSTransition
          in={this.props.contacts.length > 1 || this.props.filter !== ''}
          timeout={250}
          classNames={styles}
          unmountOnExit
         >
           <Filter/>
         </CSSTransition>
          <ContactList/>
       </>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    contacts: getContacts(state),
    filter: getFilter(state)
  }
};

const mapDispatchToProps = {
    setContacts: setContacts
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactListView);