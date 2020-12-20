import React from 'react';
import { NavLink } from 'react-router-dom';
import {routes} from '../../routes';
import styles from './Header.module.css';

export const RegisterLink = () => {
  return (
    <ul className={styles.navigation}>
      <li>
        <NavLink exact activeClassName={styles.active} className={styles.noActive} to={routes.login}>
        Log in
      </NavLink>
      </li>
      <li>
      <span className={styles.span}>/</span>
      </li>
      <li>
      <NavLink exact activeClassName={styles.active} className={styles.noActive} to={routes.register}>
        Sign up
      </NavLink>
      </li>
    </ul>
  );
};