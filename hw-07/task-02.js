'use strict';
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const list = document.querySelector ('#ingredients');

createListOfElements (ingredients);

function createListOfElements (arr) {
  let createNewItem;
  let arrayOfitems = [];
  for (let i = 0; i < arr.length; i++) {
    createNewItem = document.createElement ('li');
    createNewItem.textContent = arr[i];
    arrayOfitems.push (createNewItem);
  }
  return list.append (...arrayOfitems);
}
