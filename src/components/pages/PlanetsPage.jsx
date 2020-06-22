import React, {useEffect, useState} from 'react';
import Table from "../common/Table";
import Form from "../common/Form";
import {getPeople, getPlanets} from "../../services/swApiService";
import {getColumnNames} from "../../helpers/helper";
import {Link} from "react-router-dom";

const PlanetsPage = () => {
  const [planets, setPlanets] = useState([])
  const pageName = "Planets";
  useEffect(() => {
    const planets = localStorage.getItem('planets')
    if (planets) {
      setPlanets(JSON.parse(planets));
    } else {
      const getData = async () => {
        const data = await getPlanets()
        localStorage.setItem('planets', JSON.stringify(data));
        setPlanets(data)
      }
      getData();
    }
  }, []);
  const handleDelete = (i) => {
    const filteredPlanets = planets.filter((person, index) => index !== i - 1);
    localStorage.setItem('planets', JSON.stringify(filteredPlanets));
    setPlanets(filteredPlanets);
  }
  return (
    <>
      <h2>{pageName} from Star Wars Universe</h2>
      <Link to={'/planets/new'}>Create New</Link>
      <Table
        data={planets}
        columns={getColumnNames(planets)}
        tableDescriptor={pageName}
        onDelete={handleDelete}
      />
    </>
  );
};

export default PlanetsPage;
