import React from 'react';
import Grid from '@material-ui/core/Grid';

import Button from '@material-ui/core/Button';

import logo from '../../assets/Lada.svg'
import imgHome from '../../assets/home1.png'

import './style.css'

const Home = () => (
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

            <Button variant="contained" color="primary">
              Entrar
            </Button>

            {/* <button type="submit" formaction="http://localhost:3000/">Entrar</button> */}
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

            <a href="">Cadastre-se</a>
          </div>

        </div>
      </Grid>

    </Grid>
  </div>
);

export default Home;