import data from "../../data";


export const GET_DATA = () => {
  const tbl = {};

  data.forEach(item => {
    if(tbl[item.stage]) {
      tbl[item.stage].push(item)
    } else {
      tbl[item.stage] = [item];
    }
  });

  return tbl;
};