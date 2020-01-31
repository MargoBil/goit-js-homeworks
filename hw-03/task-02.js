'use strict';
const countProps = function (obj) {
  const keysOfCountProps = Object.keys (obj);
  for (const key of keysOfCountProps) {
    if (keysOfCountProps.length === 0) {
      return 0;
    }
  }
  return keysOfCountProps.length;
};

console.log (countProps ({})); // 0

console.log (countProps ({name: 'Mango', age: 2})); // 2

console.log (countProps ({mail: 'poly@mail.com', isOnline: true, score: 500})); // 3
