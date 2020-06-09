import React, { useEffect, useState, useCallback } from 'react';
import { TabPanel } from '../../../components/Guias'
import Grid from '@material-ui/core/Grid';


import api from '../../../services/api';
import CardDevs from '../../../components/CardDevs';
import FilterDev from '../../../components/FilterDev';

import './style.css';

const HomeRecruiter = () => {
  const [devs, setDevs] = useState([]);
  const [lang, setLang] = useState("");
  const [tech, setTech] = useState("");

  const loadDevs = useCallback(async () => {
    const { data } = await api.get('/api/dev', { params: { lang, tech } })
    setDevs(data.devs)
  }, [lang, tech])

  useEffect(() => {
    loadDevs();
  }, [loadDevs])

  return (
    <div className="home-comapany-container">
      <div className="selects">
        <FilterDev
          className="select-langs"
          label="Linguagens"
          endpoint="/langs"
          onSelect={setLang}
          selectedValue={lang}
        />
        <FilterDev
          className="select-techs"
          label="Tecnologias"
          endpoint="/techs"
          onSelect={setTech}
          selectedValue={tech}
        />
      </div>

        <Grid container spacing={2}>

          {devs.length > 0 && devs.map(dev => (
            <Grid item  md={4} lg={3} xs={12}>
              <CardDevs
                {...dev}
              />
            </Grid>
          ))}
        </Grid>

    </div>
  );
}

export default HomeRecruiter;