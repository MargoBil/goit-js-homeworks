'use strict';
let input;
let total = 0;
while (input !== null) {
  input = prompt ('Введите число');
  total = Number (input) + total;
}
alert (`Общая сумма чисел равна ${total}`);
