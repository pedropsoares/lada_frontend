import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { getToken } from '../../auth';
import { Link, withRouter } from 'react-router-dom';

import { useState } from 'react';


export function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const Guias = ({ location }) => {
  const path = location.pathname;

  let inTab = Number;

  if (path === '/company') {
    inTab = 0
  } else if (path === '/recruiters') {
    inTab = 1;
  }

  const [value, setValue] = useState(inTab);

  const handleChange = () => {
    setValue(inTab);
  };

  useEffect(() => { handleChange() }, [path]);

  const tabOne = getToken(true) ? 'Vagas' : 'Devs';
  const tabTwTo = getToken(true) ? '/recruiters' : '';
  const tabTw = getToken(true) ? 'Recrutadores' : '';

  return (
    <div>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"

      >
        <Tab label={tabOne} {...a11yProps(1)} to='/company' component={Link} />
        {getToken(true) && <Tab label={tabTw} {...a11yProps(0)} to={tabTwTo} component={Link} />}
      </Tabs>
    </div>
  );
}

export default withRouter(Guias);