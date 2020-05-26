import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import { tableIcons } from '../../../components/TableIcons'

import { TabPanel } from '../../../components/Guias'

import api from '../../../services/api'

import './style.css'

export default function HomeCompanyRecruiter() {
  const [recruitersGet, setRecruitersGet] = useState([]);
  const [recruitersPost, setRecruitersPost] = useState([]);

  useEffect(() => {
    const loadRecruiters = async () => {
      const { data } = await api.get('/api/recruiters')
      setRecruitersGet(data.recruiters)
    }
    loadRecruiters();
  }, [])

  api.post('/api/recruiters', recruitersPost)

  const [state, setState] = useState({
    columns: [
      { title: 'Nome', field: 'name' },
      { title: 'Senha', field: 'password' },
      { title: 'Email', field: 'email' },
      { title: 'Telefone', field: 'phone' },
    ],
    data: [

    ],
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
                  setRecruitersPost(newData);
                  setTimeout(() => {
                    resolve();
                  }, 600);
                }),
            }}
          />
        </div>
      </TabPanel>

    </div>
  );
}