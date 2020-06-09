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

  langs = langs.sort((current, next) => next.score - current.score)
  techs = techs.sort((current, next) => next.score - current.score)

  const mainLang = langs.length ? langs[0] : null;
  const mainTech = techs.length ? techs[0] : null;

  return (
    <Card className="dev-card">
      <div className="card-content">
        <div className="card-header">
          <div className="name">
            {name}
          </div>
          <Avatar alt="Remy Sharp" src={avatar_url} className={`${classes.large} avatar`} />
        </div>
        <div className="card-body">
          <div>
            <strong>Email: </strong>
            {email}
          </div>
          <div>
            <strong>Telefone: </strong>
            {phone}
          </div>

          <div className="max">
            {mainLang && (<>
              <div>
                <strong>Linguagem em destaque: </strong>
              </div>
              <span>{`${mainLang.name}:`}</span>
              <span>{`${mainLang.score}XP`}</span>
            </>)}
            {mainTech && (<>
              <div>
                <strong>Tecnologia em destaque: </strong>
              </div>
              <span>{`${mainTech.name}:`}</span>
              <span>{`${mainTech.score}XP`}</span>
            </>)}
          </div>

        </div>
      </div>
      <div className="card-footer">
        <PopDev
          name={name}
          langs={langs}
          techs={techs}
        />
      </div>
    </Card >
  );
}