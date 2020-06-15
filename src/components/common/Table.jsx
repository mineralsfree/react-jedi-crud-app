import React from 'react';
import Button from './Button'

function Table({columns, data, tableDescriptor, handleDelete}) {
  return data.length === 0 ? 'No data' : (
        <table className="table table-dark">
          <thead>
          <tr>
            <th scope="col">{tableDescriptor}</th>
            {columns.map(columnTitle => (
              <th key={columnTitle} scope="col">{columnTitle}</th>
            ))}
            <th key='delete' scope="col">Delete</th>
          </tr>
          </thead>
          <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <th scope="row">{++index}</th>
              {columns.map(columnTitle => (
                <td key={item[columnTitle] + columnTitle}>{item[columnTitle]}</td>
              ))}
              <td>
                <Button
                  classes='btn btn-danger'
                  label='Delete'
                  onClick={() => handleDelete(item.id)}
                />
              </td>
            </tr>
          ))}

          </tbody>
        </table>
    )
}


export default Table;
