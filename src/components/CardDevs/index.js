import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles';

import PopDev from '../PopDev/index'

import './style.css';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function CardOpportunities({ name, email, langs = [], techs = [], phone, avatar_url, _id }) {
  const classes = useStyles();

  const viewDev = async () => {

  }

  const mainLang = langs.length ? langs[0] : null;
  const mainTech = techs.length ? techs[2] : null;

  return (
    <Card className="root">
      <CardContent>
        <header>
          <Grid container spacing={12}>
            <Grid item md={6}>
              <div className="avatar">
                <Avatar alt="Remy Sharp" src={avatar_url} className={classes.large} />
              </div>
            </Grid>
            <Grid item md={12}>
              <div className="name">
                <strong>{name}</strong>
              </div>
            </Grid>
            <Grid item md={4}>
              <div className="comp-city">
                <span>{email}</span>
                <span>{phone}</span>
              </div>
            </Grid>
          </Grid>

          <div className="lang-tech">
            <div className="max-lang">
              {mainLang && (<>
                <span>{mainLang.name}</span>
                <span>{mainLang.score}</span>
              </>)}
            </div>
            <div className="max-techs">
              {mainTech && (<>
                <span>{mainTech.name}</span>
                <span>{mainTech.score}</span>
              </>)}
            </div>
          </div>

        </header>
      </CardContent>
      <CardActions>
        <PopDev
          name={name}
          langs={langs}
          techs={techs}
        />
      </CardActions>
    </Card >
  );
}