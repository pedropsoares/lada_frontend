import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { isAuth, getToken } from './auth';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register'
import HomeCompany from './pages/Company/HomeCompany'
import HomeCompanyRecruiter from './pages/Company/HomeCompanyRecruiter'
import HomeRecruiter from './pages/Recruiter/HomeRecruiter'


const CompanyRoute = (props) => isAuth() && getToken(true) ? <Route {...props} /> : <Redirect to="/login"/>;
const RecruiterRoute = (props) => isAuth() && getToken() ? <Route {...props} /> : <Redirect to="/login"/>;


const Routes = () => (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <CompanyRoute path="/company" component={HomeCompany} />
      <CompanyRoute path="/recruiters" component={HomeCompanyRecruiter} />
      <RecruiterRoute path="/recruiter" component={HomeRecruiter} />
    </Switch>
);

export default Routes;