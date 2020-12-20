import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {isAuth} from '../auth/authSelectors';

const FirstRoute = ({ component: Component, isAuth, ...routeProps }) => (
  <Route
    {...routeProps}
    render={props =>
      isAuth ? <Redirect to="/login" /> : <Redirect to="/login" />
    }
  />
);

const mapStateToProps = state => ({
  isAuth: isAuth(state),
});

export default connect(mapStateToProps)(FirstRoute);