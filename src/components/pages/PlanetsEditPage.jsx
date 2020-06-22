import React, {useEffect, useState} from "react";
import Form from "../common/Form";

export const PlanetsEditPage = (props) => {
  const [planets, setPlanets] = useState(null);
  const url = window.location;
  const isEdit = !url.pathname.endsWith('/new')
  useEffect(() => {
    const getData = async () => {
      const planets = JSON.parse(localStorage.getItem('planets'))
      if (planets) {
        if (isEdit) {
          const data = planets[url.pathname.split('/')[3]-1]
          setPlanets(data)
        } else {
          setPlanets(Object.keys(planets[0]).reduce((cols, columnName) => {
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
      data = JSON.parse(localStorage.getItem('planets'))
      data.push(newData);
    } else {
      data = JSON.parse(localStorage.getItem('planets'));
      data[url.pathname.split('/')[3]-1]  = newData;
    }
    localStorage.setItem('planets', JSON.stringify(data));
    props.history.push('/planets');
  }
  const getColumnNames = () => {
    return planets && Object.keys(planets);
  }


  return (planets && <><Form
    initialData={planets}
    columns={getColumnNames()}
    onAddData={setData}
  /> </>)
}