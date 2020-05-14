import React from 'react';
import Grid from '@material-ui/core/Grid';

import PersistentDrawerLeft from '../../../components/PersistentDrawerLeft'

import './style.css';

const HomeRecruiter = ({ history }) => (
  <div className="home-container">

    <PersistentDrawerLeft
    />

      <Grid container spacing={6}>
        <Grid item md={12}>
          <div className="home-recruiter">

            <h1>Recrutadores</h1>

          </div>
        </Grid>
      </Grid>
  </div>
);

export default HomeRecruiter;