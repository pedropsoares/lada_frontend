import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import { tableIcons } from '../../../components/TableIcons'

import { TabPanel } from '../../../components/Guias'

import api from '../../../services/api'

import './style.css'

const HomeCompanyRecruiter = () => {
  const [recruitersGet, setRecruitersGet] = useState([]);
  const [recruitersPost, setRecruitersPost] = useState([]);

  const [i, setI] = useState([])

  const updatePage = () => {
    setI(i.push(1))
    console.log(i)
  }

  useEffect(() => {
    const loadRecruiters = async () => {
      const { data } = await api.get('/api/recruiters')
      setRecruitersGet(data.recruiters)
    }
    loadRecruiters();
  }, [i])


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
                    resolve(updatePage());
                  }, 600);
                }),
              onRowUpdate: (newData, oldData) =>
                new Promise((resolve) => {
                  setTimeout(() => {
                    resolve();
                    if (oldData) {
                      console.log(newData)
                      setState((prevState) => {
                        const data = [...prevState.data];
                        data[data.indexOf(oldData)] = newData;
                        return { ...prevState, data };
                      });
                    }
                  }, 600);
                }),
              onRowDelete: (oldData) =>
                new Promise((resolve) => {
                  api.delete(`/api/recruiters/${oldData._id}`)
                  setTimeout(() => {
                    resolve(window.location.reload());
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