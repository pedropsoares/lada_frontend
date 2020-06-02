import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';

import HomeCompany from '../../pages/Company/HomeCompany';


import api from '../../services/api';

import './style.css';

export default function CardOpportunities({ _id, title, langs = [], techs = [], city, salary, descption }) {

  const deleteOpportunity = async () => {
    await api.delete(`/api/opportunitys/${_id}`)

    const relouder = {};
  }

  return (
    <Card className="root">
      <CardContent>
        <header>
          <Grid container spacing={12}>
            <Grid item md={8}>
              <div className="title-techs-langs">
                <strong>{title}</strong>
                <span>{langs.join(', ')}</span>
                <span>{techs.join(', ')}</span>
              </div>
            </Grid>
            <Grid item md={4}>
              <div className="comp-city">
                <span>{city}</span>
                <span>{salary}</span>
              </div>
            </Grid>
          </Grid>
          <p>
            {descption}
          </p>
        </header>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={deleteOpportunity}>
          <DeleteIcon />
        </Button>
      </CardActions>
    </Card>
  );
}