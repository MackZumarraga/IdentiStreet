import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

// import { openModal } from '../../actions/modal_actions';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
      !loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    )} />
  );
  
  const Protected = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
       loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    )} />
  );
  
  const mapStateToProps = state => (
    {loggedIn: Boolean(state.session.id)}
  );
  
  export const AuthRoute = withRouter(connect(mapStateToProps)(Auth)); //-mack -should see login and signup
  
  export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected)); //-mack -should see logout
  