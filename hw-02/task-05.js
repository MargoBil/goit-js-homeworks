'use strict';
const checkForSpam = function (message) {
  const messageToLowerCase = message.toLowerCase ();
  const searchWordFirst = 'sale';
  const searchWordSecond = 'spam';
  let resultSearching =
    messageToLowerCase.includes (searchWordFirst) ||
    messageToLowerCase.includes (searchWordSecond);
  return resultSearching;
};
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log (checkForSpam ('Latest technology news')); // false

console.log (checkForSpam ('JavaScript weekly newsletter')); // false

console.log (checkForSpam ('Get best sale offers now!')); // true

console.log (checkForSpam ('[SPAM] How to earn fast money?')); // true
