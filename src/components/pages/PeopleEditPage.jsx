import React, {useEffect, useState} from "react";
import Form from "../common/Form";

export const PeopleEditPage = (props) => {
  const [person, setPerson] = useState(null);
  const url = window.location;
  const isEdit = !url.pathname.endsWith('/new')
  useEffect(() => {
    const getData = async () => {
      const people = JSON.parse(localStorage.getItem('people'))
      if (people) {
        if (isEdit) {
          const data = people[url.pathname.split('/')[3]-1]
          setPerson(data)
        } else {
          setPerson(Object.keys(people[0]).reduce((cols, columnName) => {
            cols[columnName] = "";
            return cols;
          }, {}))

        }
      }
    }
    getData()
  }, [])
  const setData = (newData) => {
    let data;
    if (!isEdit) {
      data = JSON.parse(localStorage.getItem('people'))
      data.push(newData);
    } else {
      data = JSON.parse(localStorage.getItem('people'));
      data[url.pathname.split('/')[3]-1]  = newData;
    }
    localStorage.setItem('people', JSON.stringify(data));
    props.history.push('/people');
  }
  const getColumnNames = () => {
    return person && Object.keys(person);
  }

  return (person && <><Form
    initialData={person}
    columns={getColumnNames()}
    onAddData={setData}
  /> </>)
}
