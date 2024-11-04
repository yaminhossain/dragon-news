import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Link, Navigate, redirect, useLocation, useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();


  if (user) {
    return children;
  }
  return <Navigate state={location} to="/login"></Navigate>;
};

export default PrivateRoute;
