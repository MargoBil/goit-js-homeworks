'use strict';
const total = 100;
const ordered = 50;
if (ordered > total) {
  const messageNoQuantity = `На складе недостаточно товаров!`;
  console.log (messageNoQuantity);
} else {
  const messageEnoughQuantity = `Заказ оформлен, с вами свяжется менеджер!`;
  console.log (messageEnoughQuantity);
}
