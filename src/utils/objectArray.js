const objectArray = (arr, key = 'id') =>
  arr.reduce((accumulator, current) => {
    accumulator[current[key]] = current;
    return accumulator;
  }, {});
export default objectArray;
