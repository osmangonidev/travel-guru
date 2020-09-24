import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";
import { IsLoggedContext } from '../../App';
function PrivateRoute({ children, ...rest }) {
    const [isLogged,setIsLogged]=useContext(IsLoggedContext)
    return (
      <Route
        {...rest}
        render={({ location }) =>
          isLogged? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
}

export default PrivateRoute;