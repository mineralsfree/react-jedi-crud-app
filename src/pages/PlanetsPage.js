import React, { useState } from 'react';
import Table from "../components/common/Table";
import Form from '../components/common/Form'

import 'bootstrap/dist/css/bootstrap.css';

const data = [
  {first: 'Mark', last: 'Otto', handle: '@motto', id: '1'},
  {first: 'Carl', last: 'Reno', handle: '@ceno', id: '2'},
  {first: 'Steve', last: 'Smith', handle: '@ssteve', id: '3'}
]

const columns = Object.keys(data[0]);

export const PlanetsPage = () =>{
  const [planets, setPlanets] = useState(data);

  const handleAddPlanet = (planetsData) => {
    const data = [...planets, planetsData];
    setPlanets(data)
  }


  const getInitialPlanetsData = () => {
    return columns.reduce((cols, columnName) => {
      cols[columnName] = "";
      return cols;
    }, {})
  }

  const handleDeletePlanet = (personId)=>{
    const data = planets.filter((el)=>el.id !== personId);
    setPlanets(data);
  }
  return (
    <div className="container">
      <Table
        data={planets}
        columns={columns}
        tableDescriptor="Planets"
        handleDelete={handleDeletePlanet}
      />
      <Form
        initialData={getInitialPlanetsData()}
        columns={columns}
        onAddData={handleAddPlanet}

      />
    </div>
  );}
