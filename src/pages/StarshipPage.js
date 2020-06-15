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

export const StarshipPage = () =>{
  const [starships, setStarships] = useState(data);

  const handleAddStarship = (starshipsData) => {
    const data = [...starships, starshipsData];
    setStarships(data)
  }

  const getInitialStarshipsData = () => {
    return columns.reduce((cols, columnName) => {
      cols[columnName] = "";
      return cols;
    }, {})
  }
  const handleDeleteStarship = (personId)=>{
    const data = starships.filter((el)=>el.id !== personId);
    setStarships(data);
  }

  return (
    <div className="container">
      <Table
        data={starships}
        columns={columns}
        tableDescriptor="Starships"
        handleDelete={handleDeleteStarship}
        />
      <Form
        initialData={getInitialStarshipsData()}
        columns={columns}
        onAddData={handleAddStarship}
      />
    </div>
  );}
