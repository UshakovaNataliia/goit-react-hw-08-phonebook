import { Switch } from 'react-router-dom';
import React, { Component, Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import routes from '../../routes';
import {getUser} from '../../redux/auth/authOperations';
import PrivateRoute from '../../redux/auth/PrivateRoute';
import PublicRoute from '../../redux/auth/PublicRoute';
import FirstRoute from '../../redux/auth/FirstRoute';
import {Error} from '../Error/Error';
import {clearError} from '../../redux/auth/authActions';
import authSelectors from '../../redux/auth/authSelectors';

const ContactsListView = lazy(() =>
  import('../../redux/views/ContactsListView' /* webpackChunkName: "contact-view" */),
);
const LogInView = lazy(() =>
  import('../../redux/views/LogInView' /* webpackChunkName: "login-view" */),
);
const RegisterView = lazy(() =>
  import('../../redux/views/RegisterView' /* webpackChunkName: "register-view" */),
);

class App extends Component {
  componentDidMount() {
    if (this.props.token) {
      this.props.auth();
    }
    this.props.clearError();
  }
  render() {
    return (
      <>
        <Header />
        {this.props.error && <Error />}
        <Suspense fallback={<h1>Loading</h1>}>
          <Switch>
            <PrivateRoute
              exact
              path={routes.contacts}
              component={ContactsListView}
            />
            <PublicRoute
              path={routes.login}
              restricted={true}
              component={LogInView}
            />
            <PublicRoute
              path={routes.register}
              restricted={true}
              component={RegisterView}
            />
            <FirstRoute />
          </Switch>
        </Suspense>
      </>
    );
  }
}
const mapStateToProps = state => ({
  error: state.auth.error,
  token: authSelectors.isAuth(state),
});

const mapDispatchToProps = {
  auth: getUser,
  clearError: () => clearError,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);