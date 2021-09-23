import React from 'react';
import { Route } from 'react-router';

function PrivateRoute({ children, login, ...rest }) {
  return (
    <div>
      {login && <Route {...rest}>{children}</Route>}
    </div>
  );
}

export default PrivateRoute;
