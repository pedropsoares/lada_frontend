import React, { useEffect } from 'react';
import { TabPanel } from '../../../components/Guias'

import api from '../../../services/api';

import PersistentDrawerLeft from '../../../components/PersistentDrawerLeft';
import CardOpportunities from '../../../components/CardOpportunities';

import './style.css';
import { useState } from 'react';


const HomeCompany = () => {
  const [opportunities, setOpportunities] = useState([]);

  useEffect(() => {
    const loadOpportunities = async () => {
      const response = await api.get('/api/company/opportunities')

      setOpportunities(response.data.opportunity)

    }
    loadOpportunities();
  }, [])

  let index = 0;

  return (
    <div className="home-comapany-container">

      <PersistentDrawerLeft/>

      <TabPanel value={index} index={0}>
        <div id="cards">
          <ul>
            {opportunities.length > 0 && opportunities.map(opportunity => (
              <li className="opportunityIntem">
                <CardOpportunities
                  {...opportunity}
                />
              </li>
            ))}
          </ul>
        </div>
      </TabPanel>
      <TabPanel value={index} index={1}>
        Item Two
      </TabPanel>

    </div>
  );
}

export default HomeCompany;