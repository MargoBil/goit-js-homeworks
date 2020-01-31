'use strict';
const findBestEmployee = function (employees) {
  let maxNumOfBestEmployee = 0;
  let nameOfBestEmployee;
  const keysOfEmployees = Object.keys (employees);
  for (const key of keysOfEmployees) {
    if (maxNumOfBestEmployee < employees[key]) {
      maxNumOfBestEmployee = employees[key];
      nameOfBestEmployee = key;
    }
  }
  return nameOfBestEmployee;
};

console.log (
  findBestEmployee ({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log (
  findBestEmployee ({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log (
  findBestEmployee ({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
