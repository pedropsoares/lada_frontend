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

export default function CardLangsTechs({ langs = [], techs = [] }) {
  const classes = useStyles();

  const mainLangs = langs.length ? langs : null;
  const mainTechs = techs.length ? techs : null;

  return (
    <div className="langs-techs">
      <Grid container spacing={6}>

        <div className="langs">
          <h2>Linguagens</h2>
          {mainLangs.map(lang => {
            return (
              <>
                <Card className="root-lt">
                  <CardContent>
                    <header>
                      <span>{lang.name}:</span>
                      <span>{lang.score}</span>
                    </header>
                  </CardContent>
                </Card >
              </>
            )
          })}
        </div>
        <div className="techs">
          <h2>Tecnologias</h2>
          {mainTechs && mainTechs.map(tech => {
            return (
              <>
                <Card className="root-lt">
                  <CardContent>
                    <header>
                      <span>{tech.name}:</span>
                      <span>{tech.score}</span>
                    </header>
                  </CardContent>
                </Card >
              </>
            )
          })}
        </div>
      </Grid>
    </div>
  );
}