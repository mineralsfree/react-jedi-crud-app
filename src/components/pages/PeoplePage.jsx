import React, {useEffect, useState} from 'react';
import Table from "../common/Table";
import {getPeople} from "../../services/swApiService";
import {Link} from "react-router-dom";

const data = [
  {first: 'Mark', last: 'Otto', handle: '@motto', id: '1'},
  {first: 'Carl', last: 'Reno', handle: '@ceno', id: '2'},
  {first: 'Steve', last: 'Smith', handle: '@ssteve', id: '3'}
]

const columns = Object.keys(data[0]);
export let addPeople;
const PeoplePage = () => {
  const pageName = 'People';
  const [people, setPeople] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('people')) {
      setPeople(JSON.parse(localStorage.getItem('people')));
    } else {
      const getData = async () => {
        const data = await getPeople()
        localStorage.setItem('people', JSON.stringify(data));
        setPeople(data)
      }
      getData()
    }
  }, [])

  const handleDelete = (i) => {
    const filteredPeople = people.filter((person, index) => index !== i - 1);
    localStorage.setItem('people', JSON.stringify(filteredPeople));
    setPeople(filteredPeople)
  }

  const getInitialPeopleData = () => {
    return columns.reduce((cols, columnName) => {
      cols[columnName] = "";
      return cols;
    }, {})
  }

  const getColumnNames = () => {
    if (!people.length) {
      return []
    }
    return Object.keys(people[0])
  }

  console.log(getInitialPeopleData());
  return (
    <>
      <h2>{pageName} from Star Wars Universe</h2>
      <Link to={'/people/new'}>Create New</Link>
      <Table
        data={people}
        columns={getColumnNames()}
        tableDescriptor={pageName}
        onDelete={handleDelete}
      />
    </>
  );
};

export default PeoplePage;
