import React from "react";
import { Route, Navigate, RouteProps } from "react-router-dom";

interface ProtectedRouteProps extends RouteProps {
  isAuthenticated: boolean;
  authenticationPath: string;
  // Add more props as needed
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  isAuthenticated,
  authenticationPath,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Navigate
            to={{
              pathname: authenticationPath,
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
