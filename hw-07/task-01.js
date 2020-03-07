'use strict';
const categories = document.querySelectorAll ('#categories > .item');
console.log (`В списке ${categories.length} категории.`);
const categoriesOfEachItem = document.querySelectorAll ('.item > h2');
const itemsOfCategories = document.querySelectorAll ('.item > ul');

getNameCategoriesWithLength (categoriesOfEachItem, itemsOfCategories);

function getNameCategoriesWithLength (types, items) {
  for (let i = 0; i < types.length; i++) {
    console.log (`Категория: ${types[i].textContent}`);
    console.log (`Количество елементов: ${items[i].children.length}`);
  };
};
