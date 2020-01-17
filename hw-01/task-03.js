'use strict';
const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
const input = prompt ('Please enter password!');
switch (input) {
  case 'jqueryismyjam':
    message = 'Добро пожаловать!';
    break;
  case null:
    message = 'Отменено пользователем!';
    break;
  default:
    message = 'Доступ запрещен, неверный пароль!';
    break;
}
alert (message);
