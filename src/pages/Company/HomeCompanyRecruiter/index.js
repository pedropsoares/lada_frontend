import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import { tableIcons } from '../../../components/TableIcons'

import { TabPanel } from '../../../components/Guias'

import api from '../../../services/api'

import './style.css'

const HomeCompanyRecruiter = () => {
  const [recruitersGet, setRecruitersGet] = useState([]);

  useEffect(() => {
    const loadRecruiters = async () => {
      const { data } = await api.get('/api/recruiters')
      setRecruitersGet(data.recruiters)
    }
    loadRecruiters();
  }, [])

  const [state] = useState({
    columns: [
      { title: 'Nome', field: 'name' },
      { title: 'Senha', field: 'password' },
      { title: 'Email', field: 'email' },
      { title: 'Telefone', field: 'phone' },
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
            title="Recrutadores"
            columns={state.columns}
            data={
              recruitersGet
            }
            editable={{
              onRowAdd: (newData) =>
                new Promise((resolve) => {
                  api.post('/api/recruiters', newData)
                  setTimeout(() => {
                    const loadRecruiters = async () => {
                      const { data } = await api.get('/api/recruiters')
                      setRecruitersGet(data.recruiters)
                    }
                    resolve(loadRecruiters());
                  }, 600);
                }),
              onRowUpdate: (newData, oldData) =>
                new Promise((resolve) => {
                  
                  if (oldData) {
                    console.log(newData)
                    api.put('/api/recruiters', newData)
                  }
                  setTimeout(() => {
                    const loadRecruiters = async () => {
                      const { data } = await api.get('/api/recruiters')
                      setRecruitersGet(data.recruiters)
                    }
                    resolve(loadRecruiters());
                  }, 600);
                }),
              onRowDelete: (oldData) =>
                new Promise((resolve) => {
                  api.delete(`/api/recruiters/${oldData._id}`)
                  setTimeout(() => {
                    const loadRecruiters = async () => {
                      const { data } = await api.get('/api/recruiters')
                      setRecruitersGet(data.recruiters)
                    }
                    resolve(loadRecruiters());
                  }, 600);
                }),
            }}
          />
        </div>
      </TabPanel>

    </div>
  );
}

export default HomeCompanyRecruiter;