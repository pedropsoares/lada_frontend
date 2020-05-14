import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CompanyRoutes, RecruiterRoutes } from './auth';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register'
import HomeCompany from './pages/Company/HomeCompany'
import HomeRecruiter from './pages/Recruiter/HomeRecruiter'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
      <CompanyRoutes path="/company" component={HomeCompany}/>
      <RecruiterRoutes path="/recruiter" component={HomeRecruiter}/>
    </Switch>
  </BrowserRouter>
);

export default Routes;