'use strict';
const credits = 23580;
const pricePerDroid = 3000;
let inputUser = prompt ('Пожалуйста, укажите количество дроидов!');
const quantityPerDroidWantUser = Number (inputUser);
let totalPrice;
let balanceCredits;
if (inputUser === null) {
  console.log ('Отменено пользователем!');
} else {
  totalPrice = pricePerDroid * quantityPerDroidWantUser;
  if (totalPrice > credits) {
    console.log ('Недостаточно средств на счету!');
  } else {
    balanceCredits = credits - totalPrice;
    alert (
      `Вы купили ${inputUser} дроидов, на счету осталось ${balanceCredits} кредитов.`
    );
  }
}
