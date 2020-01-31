'use strict';
const countTotalSalary = function (employees) {
  let totalSalery = 0;
  const valueOfEmployees = Object.values (employees);
  for (const value of valueOfEmployees) {
    totalSalery = totalSalery + value;
  }
  return totalSalery;
};

console.log (countTotalSalary ({})); // 0

console.log (
  countTotalSalary ({
    mango: 100,
    poly: 150,
    alfred: 80,
  })
); // 330

console.log (
  countTotalSalary ({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  })
); // 400
