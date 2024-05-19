// import React from "react";
// import { Navigate } from "react-router-dom";

// const ProtectedRoute = ({ element, auth, adminOnly }) => {
//   if (!auth) {
//     return <Navigate to="/login" />;
//   }

//   if (adminOnly && auth.role !== "admin") {
//     return <Navigate to="/" />;
//   }

//   return element;
// };

// export default ProtectedRoute;

// ProtectedRoute.js
import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const ProtectedRoute = ({ role, ...props }) => {
  const { user } = useContext(AuthContext);

  const isAuthenticated = user !== null;
  const hasRequiredRole = user && user.role === role;

  return isAuthenticated && hasRequiredRole ? (
    <Route {...props} />
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoute;
