import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Navigate, Routes, useNavigate } from 'react-router-dom';


export default function Privateroute({component: Component, ...rest}) {
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const isAuthenticated = userInfo.id ? true : false;
    console.log(isAuthenticated)
    const navigate = useNavigate();
  return (
    <Routes>
        <Route
        {...rest}
        render={(props) =>
          isAuthenticated ? (
            <Component {...props} />
          ) : (
            navigate('/login')
          )
        }
      />
    </Routes>
  )
}

