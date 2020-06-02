import React, { useEffect, useState } from 'react';
import { TabPanel } from '../../../components/Guias'

import api from '../../../services/api';

import CardOpportunities from '../../../components/CardOpportunities';

import './style.css';

const HomeCompany = () => {
  const [opportunities, setOpportunities] = useState([]);

  useEffect(() => {
    const loadOpportunities = async () => {
      const { data } = await api.get('/api/company/opportunities')
      setOpportunities(data.opportunity)

    }
    loadOpportunities();
  }, [opportunities])

  return (
    <div className="home-comapany-container">


      <TabPanel>
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

    </div>
  );
}

export default HomeCompany;