'use strict';
let input;
const numbers = [];
let total = 0;
while (input !== null) {
  input = prompt ('Введите число!');
  numbers.push (Number (input));
}
for (let i = 0; i < numbers.length; i++) {
  total = numbers[i] + total;
}
if (total !== 0) {
  console.log (`Общаая сумма чисел равна ${total}`);
}
