// export const sortByName = arrOfObj => {
//   return arrOfObj.sort(function(a, b) {
//     return a.name > b.name;
//   });
// };

export const sortByHighestNumber = (arrOfObj: any[], key: string) => {
  return arrOfObj.sort(function (a, b) {
    return b[key] - a[key];
  });
};
export const sortByLowestNumber = (arrOfObj: any[], key: string) => {
  return arrOfObj.sort(function (a, b) {
    return a[key] - b[key];
  });
};

// export const sortByEarliestDate = arrOfObj => {
//   return arrOfObj.sort(function(a, b) {
//     return new Date(a.date) - new Date(b.date);
//   });
// };
