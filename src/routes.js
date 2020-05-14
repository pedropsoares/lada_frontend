import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoutes from './auth';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register'
import HomeCompany from './pages/Company/HomeCompany'



const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
      <PrivateRoutes path="/company" component={HomeCompany}/>
    </Switch>
  </BrowserRouter>
);

export default Routes;