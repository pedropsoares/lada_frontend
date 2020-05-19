import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';

import api from '../../../services/api';

import PersistentDrawerLeft from '../../../components/PersistentDrawerLeft';
import CardOpportunities from '../../../components/CardOpportunities';

import './style.css';
import { useState } from 'react';


const HomeCompany = ({ history }) => {
  const [opportunities, setOpportunities] = useState([]);

  useEffect(() => {
    const loadOpportunities = async () => {
      const response = await api.get('/api/company/opportunities')

      setOpportunities(response.data.opportunity)

      console.log(response.data)
    }


    loadOpportunities();
  }, [])


  return (
    <div className="home-comapany-container">

      <PersistentDrawerLeft
      />
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

    </div>
  );
}

export default HomeCompany;