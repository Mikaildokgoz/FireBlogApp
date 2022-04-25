import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext';
import {Outlet, Navigate} from "react-router-dom";
import { errorToastNotify } from '../helpers/toastNotify';

const PrivateRouter = () => {
  const {currentUser} = useContext(AuthContext)

  // return (currentUser ? (<Outlet />) : (<Navigate to="login" />));
  if (currentUser) {
    return <Outlet />
  } else {
    errorToastNotify("Please login firstly!")
    return <Navigate to="login" />
  }
}

export default PrivateRouter