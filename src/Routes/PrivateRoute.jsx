import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  if(loading){
    return <div>Loading...</div>
  }else{
    if (user) {
        return <div>{children}</div>;
      }else{
        return <Navigate to="/login" replace></Navigate>
      }
  }
};

export default PrivateRoute;
