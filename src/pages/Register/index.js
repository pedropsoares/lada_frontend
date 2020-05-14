import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import logo from '../../assets/Lada.svg'

import './style.css';

const Register = ({ history }) => {
  const [name, setName] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [langs, setLangs] = useState('');
  const [techs, setTechs] = useState('');
  const [password, setPassword] = useState('');
  const [bio, setBio] = useState('');

  const handleSubmit = () => {

  }

  return (
    <div className="register-container">
      <Grid container spacing={12}>
        <Grid item md={12}>
          <div className="logo">
            <img src={logo} alt="" />
          </div>
        </Grid>
        <Grid item md={12}>
          <div className="form-register">
            <Card className="card-register">
              <form onSubmit={handleSubmit}>
                <div className="">

                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Nome da Empresa"
                    name="name"
                    autoComplete="name"
                    autoFocus
                    value={name}
                    onChange={event => setName(event.target.value)}
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="cnpj"
                    label="cnpj"
                    name="cnpj"
                    autoComplete="cnpj"
                    autoFocus
                    value={cnpj}
                    onChange={event => setCnpj(event.target.value)}
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="langs"
                    label="langs"
                    name="langs"
                    autoComplete="langs"
                    autoFocus
                    value={langs}
                    onChange={event => setLangs(event.target.value)}
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="techs"
                    label="techs"
                    name="techs"
                    autoComplete="techs"
                    autoFocus
                    value={techs}
                    onChange={event => setTechs(event.target.value)}
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="password"
                    label="password"
                    name="password"
                    autoComplete="password"
                    autoFocus
                    type="password"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                  />
                  <div className="bio">
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="bio"
                      label="bio"
                      name="bio"
                      autoComplete="bio"
                      autoFocus
                      value={bio}
                      onChange={event => setBio(event.target.value)}
                    />
                  </div>

                </div>

                <div className="btn">
                  <Button
                    className="sign-up"
                    variant="contained"
                    type="submit"
                    color="primary"
                  >Cadastrar
                </Button>
                </div>
              </form>


            </Card>
          </div>

        </Grid>
      </Grid>
    </div>
  );
};

export default Register;


