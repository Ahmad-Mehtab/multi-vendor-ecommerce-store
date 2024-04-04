import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom';
import { HomePage } from './Route';

function PrivateRouter() {
 const {isAuthorized} =  useSelector((state)=> state.user);
  return isAuthorized ? <HomePage class="bg-slate-200" />: <Navigate to="/sign-up" />
  
}

export default PrivateRouter