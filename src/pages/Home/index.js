import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

import Button from '@material-ui/core/Button';

import logo from '../../assets/Lada.svg'
import imgHome from '../../assets/home1.png'

import './style.css';
import { isAuth, getToken } from '../../auth';

const Home = ({ history }) => {

  if (isAuth()) {
    const path = getToken(true) ? '/company' : '/recruiter'
    return <Redirect to={path} />
  }

  return (
    <div className="home-container">
      <Grid container spacing={12}>
        <Grid item md={6}>
          <div className="welcome">

            <div className="logo">
              <img src={logo} alt="" />
            </div>

            <div className="content">
              <h1>Bem vindo ao Lada</h1>
              <p>
                Encontre aqui as melhores Profissionais <br />
              do mercado da Programação
            </p>

              <Button className="home-btn" onClick={() => history.push('/login')} variant="contained" color="primary">
                Entrar
            </Button>

            </div>

          </div>
        </Grid>

        <Grid item md={6}>
          <div className="infos">

            <div className="imgHome">
              <img src={imgHome} alt="" />
            </div>

            <div className="singUp">
              <p>
                Não tem uma conta,<br />
              Traga sua empresa pro Lada
            </p>

              <Link to="/register">Cadastre-se</Link>
            </div>

          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;