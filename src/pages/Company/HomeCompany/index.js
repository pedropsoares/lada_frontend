import React from 'react';
import Grid from '@material-ui/core/Grid';

import PersistentDrawerLeft from '../../../components/PersistentDrawerLeft'

import './style.css';

const HomeCompany = ({ history }) => (
  <div className="home-container">

    <PersistentDrawerLeft
    />

      <Grid container spacing={6}>
        <Grid item md={12}>
          <div className="home-company">


          </div>
        </Grid>
      </Grid>
  </div>
);

export default HomeCompany;