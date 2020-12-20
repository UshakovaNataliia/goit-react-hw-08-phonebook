import React, { Component } from 'react';
import { RegisterLink } from '../Header/RegisterLink';
import Menu from './Menu';
import styles from './Header.module.css';
import { connect } from 'react-redux';
import {isAuth, name} from '../../redux/auth/authSelectors';

class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        {this.props.isAuth ? <Menu /> : <RegisterLink />}
      </header>
    );
  }
}
const mapStateToProps = state => ({
  isAuth: isAuth(state),
  name: name(state),
});

export default connect(mapStateToProps)(Header);