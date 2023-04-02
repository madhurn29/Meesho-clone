import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  let isAuth = JSON.parse(localStorage.getItem("UserLogin")) || false;
  const location = useLocation();
  // console.log('location:', location);

  if (!isAuth) {
    return <Navigate state={location.pathname} to="/signup" replace />;
  }

  return children;
};

export default PrivateRoute;
