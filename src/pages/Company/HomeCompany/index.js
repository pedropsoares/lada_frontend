import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import { tableIcons } from '../../../components/TableIcons'

import { TabPanel } from '../../../components/Guias'

import api from '../../../services/api'

import './style.css'

const HomeCompany = () => {
  const [opportunities, setOpportunities] = useState([]);

  useEffect(() => {
    const loadOpportunities = async () => {
      const { data } = await api.get('/api/company/opportunities')
      setOpportunities(data.opportunity)
    }
    loadOpportunities();
  }, [])

  const [state] = useState({
    columns: [
      { title: 'Titulo', field: 'title' },
      { title: 'Descrição', field: 'descption' },
      { title: 'Salario', field: 'salary' },
      { title: 'Cidade', field: 'city' },
      { title: 'Linguagens', field: 'langs' },
      { title: 'Tecnologias', field: 'techs' },
    ],
    data: [

    ]
  });

  return (
    <div id="home-comapany-recruiter-container">

      <TabPanel>
        <div id="table">

          <MaterialTable
            icons={tableIcons}
            title="Vagas"
            columns={state.columns}
            data={
              opportunities
            }
            editable={{
              onRowAdd: (newData) =>
                new Promise((resolve) => {
                  api.post('/api/opportunitys', newData)
                  setTimeout(() => {
                    const loadOpportunities = async () => {
                      const { data } = await api.get('/api/company/opportunities')
                      console.log(data)
                      setOpportunities(data.opportunity)
                    }
                    resolve(loadOpportunities());
                  }, 600);
                }),
                onRowUpdate: (newData, oldData) =>
                new Promise((resolve) => {
                  
                  if (oldData) {
                    console.log(newData)
                    console.log(oldData)
                    api.put('/api/opportunitys', newData)
                  }
                  setTimeout(() => {
                    const loadOpportunities = async () => {
                      const { data } = await api.get('/api/company/opportunities')
                      setOpportunities(data.opportunity)
                    }
                    resolve(loadOpportunities());
                  }, 600);
                }),
              onRowDelete: (oldData) =>
                new Promise((resolve) => {
                  api.delete(`/api/opportunitys/${oldData._id}`)
                  setTimeout(() => {
                    const loadOpportunities = async () => {
                      const { data } = await api.get('/api/company/opportunities')
                      setOpportunities(data.opportunity)
                    }
                    resolve(loadOpportunities());
                  }, 600);
                }),
            }}
          />
        </div>
      </TabPanel>

    </div>
  );
}

export default HomeCompany;