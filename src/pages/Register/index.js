import React, { useState, useMemo } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';

import { isAuth, getToken } from '../../auth';

import logo from '../../assets/Lada.svg'
import camera from '../../assets/camera.svg'

import api from '../../services/api';

import './style.css';

const Register = ({ history }) => {
  const [name, setName] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [langs, setLangs] = useState('');
  const [techs, setTechs] = useState('');
  const [password, setPassword] = useState('');
  const [bio, setBio] = useState('');
  const [logoCompany, setLogoCompany] = useState(null);

  const preview = useMemo(() => {
    return logoCompany ? URL.createObjectURL(logoCompany) : null;
  }, [logoCompany])

  const handleSubmit = async (event) => {
    event.preventDefault();



    try {
      const data = new FormData();

      data.append('name', name);
      data.append('cnpj', cnpj);
      data.append('langs', langs);
      data.append('techs', techs);
      data.append('password', password)
      data.append('bio', bio);
      data.append('logoCompany', logoCompany);

      await api.post('/api/company', data);

      alert('cadastro realizado com sucesso!');

      history.push('/login');

    } catch (e) {
    }

  }

  if (isAuth()) {
    const path = getToken(true) ? '/company' : '/recruiter'
    return <Redirect to={path} />
  }

  return (
    <div className="register-container">
      <Grid container spacing={12}>
        <Grid item md={12}>
          <div className="logo-register ">
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

                  <label
                    id="logoCompany"
                    style={{ backgroundImage: `url(${preview})` }}
                    className={logoCompany ? 'has-logoCompany' : ''}
                  >
                    <input type="file" onChange={event => setLogoCompany(event.target.files[0])} />
                    <img src={camera} alt="Select img" />
                  </label>

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


