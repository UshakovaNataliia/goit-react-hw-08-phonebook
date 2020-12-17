import React from 'react';
import { connect } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations';
import styles from './Header.module.css';

const UserMenu = props => {
  let userName;
  if (props.name) {
    userName = props.name.split('');
  }
  return (
    <div className={styles.loginMenu}>
      {userName && <span className={styles.logo}>{userName[0]} </span>}
      <span className={styles.userName}>Welcome, {props.name}</span>
      <button className={styles.button} onClick={props.logout} type="button">
        Log out
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  name: state.auth.user.name,
});

export default connect(mapStateToProps, { logout: logOut })(
  UserMenu,
);