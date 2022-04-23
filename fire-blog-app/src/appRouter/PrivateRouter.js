import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext';
import {Outlet, Navigate} from "react-router-dom";

const PrivateRouter = () => {
// const Navigate = useNavigate()
  const {currentUser} = useContext(AuthContext)
  console.log(currentUser);

  return (currentUser ? (<Outlet />) : (<Navigate to="login" />));
  
}

export default PrivateRouter