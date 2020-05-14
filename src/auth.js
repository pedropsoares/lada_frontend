import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoutes = props => {
  const isAuthL = !!localStorage.getItem('token-company');
  const isAuthS = !!sessionStorage.getItem('token-company');

  if (isAuthL) {
    return <Route {...props}/>
  } else if (!isAuthL) {
    if (isAuthS) {
    return <Route {...props}/>
    } else {
      return <Redirect to='/login'/>
    }
  }

}

export default PrivateRoutes;