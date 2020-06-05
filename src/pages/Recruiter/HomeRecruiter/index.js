import React, { useEffect, useState } from 'react';
import { TabPanel } from '../../../components/Guias'

import api from '../../../services/api';

import CareDevs from '../../../components/CardDevs';

import './style.css';

const HomeRecruiter = () => {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    const loadDevs = async () => {
      const { data } = await api.get('/api/dev')
      setDevs(data)

    }
    loadDevs();
  }, [])

  return (
    <div className="home-comapany-container">

      <TabPanel>
        <div id="cards">
          <ul>
            {devs.length > 0 && devs.map(dev => (
              <li className="opportunityIntem">
                <CareDevs
                  {...dev}
                />
              </li>
            ))}
          </ul>
        </div>
      </TabPanel>

    </div>
  );
}

export default HomeRecruiter;