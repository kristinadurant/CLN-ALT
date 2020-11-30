import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const AdminRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useContext(AppContext);
  const user = sessionStorage.getItem('user');
  const admin = currentUser?.admin;

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !admin ? <Redirect to="/" /> : <Component {...routeProps} />
      }
    />
  );
};

export default AdminRoute;
