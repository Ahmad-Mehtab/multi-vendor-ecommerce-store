import React, { useEffect } from 'react'
// import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import Login from "../components/Login/Login.jsx";

const LoginPage = () => {
  const navigate = useNavigate();
//   const { isAuthenticated } = useSelector((state) => state.user);

//   useEffect(() => {
//     if(isAuthenticated === true){
//       navigate("/");
//     }
//   }, [])
  
  return (
    <div>

        <h2>Login page</h2>
        {/* <Login /> */}
    </div>
  )
}

export default LoginPage;