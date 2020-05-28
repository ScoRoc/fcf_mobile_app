export const getIndex = (findBy, arr, match) => {
  const value = match || findBy;
  return arr.indexOf(arr.find(item => item[findBy] === value));
}
