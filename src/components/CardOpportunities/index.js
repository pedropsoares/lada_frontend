import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import './style.css';

export default function CardOpportunities({ title, langs = [], techs = [], city, salary, descption }) {

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
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}