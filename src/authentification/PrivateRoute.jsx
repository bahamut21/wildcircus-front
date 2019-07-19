import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, token, ...propsRoute }) => (
  <Route
    {...propsRoute}
    render={props => (
      (token && token !== '')
        ? <Component {...props} />
        : (
          <Redirect to={{
            pathname: '/admin/signin',
            state: { from: props.location },
          }}
          />
        )
    )}
  />
);

const mstp = state => ({
  token: state.logAdmin.token,
});

export default connect(mstp)(PrivateRoute);