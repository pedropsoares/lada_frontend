import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const CompanyRoutes = props => {
  const companyIsAuthL = !!localStorage.getItem('token-company');
  const companyIsAuthS = !!sessionStorage.getItem('token-company');

  if (companyIsAuthL) {
    return <Route {...props}/>
  } else if (!companyIsAuthL) {
    if (companyIsAuthS) {
    return <Route {...props}/>
    } else {
      return <Redirect to='/login'/>
    }
  }

}
export const RecruiterRoutes = props => {
  const companyIsAuthL = !!localStorage.getItem('token-recruiter');
  const companyIsAuthS = !!sessionStorage.getItem('token-recruiter');

  if (companyIsAuthL) {
    return <Route {...props}/>
  } else if (!companyIsAuthL) {
    if (companyIsAuthS) {
    return <Route {...props}/>
    } else {
      return <Redirect to='/login'/>
    }
  }

}