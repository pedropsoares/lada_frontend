import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';


import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';

import { isAuth, getToken, setAuthToken } from '../../auth';

import api from '../../services/api'

import logo from '../../assets/Lada.svg'

import './style.css';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={0}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Login = ({ history }) => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [cnpj, setCnpj] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [passwordRecruiter, setPasswordRecruiter] = useState('');

  const [remember, setRemember] = React.useState(false);

  const handleSubmitComp = async (event) => {
    event.preventDefault();

    try {
      const { data } = await api.post('/api/company/login', { cnpj, password })

      setAuthToken(data.token, remember, true);
      window.location.reload(); 
      history.push('/company')

    } catch (e) {
      alert('login ou senha sem conrrespondencia!')

    }

  }

  const handleSubmitRec = async (event) => {
    event.preventDefault();

    try {
      const { data } = await api.post('/api/recruiter/login', { email, passwordRecruiter })

      setAuthToken(data.token, remember)
      window.location.reload(); 
      history.push('/recruiter')

    } catch (e) {
      alert('login ou senha sem conrrespondencia!')

    }
  }

  if (isAuth()) {
    const path = getToken(true) ? '/company' : '/recruiter'
    return <Redirect to={path} />
  }

  return (
    <Grid container spacing={12}>
      <Grid item md={3} lg={12} xs={12}>

        <div className="login-container">
          <div className="paper">
            <Link rel="stylesheet" to="/">
              <img src={logo} alt="" />
            </Link>
          </div>

          <div className="box">
            <AppBar className="abas" position="static">
              <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                <Tab label="Empresa" {...a11yProps(0)} />
                <Tab label="Recrutador" {...a11yProps(1)} />
              </Tabs>
            </AppBar>
            <div className="form-login">
              <TabPanel value={value} index={0}>
                <Container component="main" maxWidth="xs">
                  <CssBaseline />
                  <div className="">

                    <form className="form" onSubmit={handleSubmitComp}>
                      <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="cnpj"
                        label="CNPJ"
                        name="cnpj"
                        autoComplete="cnpj"
                        value={cnpj}
                        autoFocus
                        onChange={event => setCnpj(event.target.value)}
                      />
                      <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="password"
                        type="password"
                        id="password"
                        value={password}
                        autoComplete="current-password"
                        onChange={event => setPassword(event.target.value)}
                      />
                      <FormControlLabel
                        control={<Checkbox checked={remember} onClick={() => setRemember(!remember)} color="primary" />}
                        label="Mantenha-se conectado"
                      />
                      <Button
                        className="sign-in"
                        variant="contained"
                        type="submit"
                        color="primary">
                        Entrar
                    </Button>
                      <Grid container>
                        <Grid item xs>
                          <Link to="#" variant="body2">
                            Forgot password?
                        </Link>
                        </Grid>
                        <Grid item>
                          <Link to="/register" variant="body2">
                            {"Don't have an account? Sign Up"}
                          </Link>
                        </Grid>
                      </Grid>
                    </form>
                  </div>
                </Container>

              </TabPanel>
              <TabPanel value={value} index={1}>
                <Container component="main" maxWidth="xs">
                  <CssBaseline />
                  <div>

                    <Typography component="h1" variant="h5">

                    </Typography>
                    <form className="form" onSubmit={handleSubmitRec}>
                      <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                      />
                      <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="passwordRecruiter"
                        label="password"
                        type="password"
                        id="passwordRecruiter"
                        autoComplete="current-password"
                        value={passwordRecruiter}
                        onChange={event => setPasswordRecruiter(event.target.value)}
                      />
                      <FormControlLabel
                        control={<Checkbox checked={remember} onClick={() => setRemember(!remember)} color="primary" />}
                        label="Mantenha-se conectado"
                      />
                      <Button
                        className="sign-in"
                        variant="contained"
                        type="submit"
                        color="primary">
                        Entrar
                    </Button>
                      <Grid container>
                        <Grid item xs>
                          <Link to="#" variant="body2">
                            Forgot password?
                        </Link>
                        </Grid>
                      </Grid>
                    </form>
                  </div>
                </Container>
              </TabPanel>
            </div>
          </div>

        </div>
      </Grid>
    </Grid>
  );
};

export default Login;


