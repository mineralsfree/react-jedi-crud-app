export const getKeys = (obj)  => {
  return obj.reduce((cols, columnName) => {
    cols[columnName] = "";
    return cols;
  }, {})
}
export const getColumnNames = (array)=>{
  if (!array.length) {
    return []
  }
  return Object.keys(array[0])


}