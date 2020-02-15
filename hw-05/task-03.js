'use strict';
const Storage = function (array) {
  this.array = array;
};

Storage.prototype.getItems = function () {
  return this.array;
};

Storage.prototype.addItem = function (item) {
  this.array.push (item);
  storage.items = items;
};

Storage.prototype.removeItem = function (item) {
  if (this.array.indexOf (item) !== -1) {
    this.array.splice (this.array.indexOf (item), 1);
  } else {
    this.array.push (item);
  }
};

const storage = new Storage ([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItems ();
console.table (items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem ('Дроид');
console.table (storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem ('Пролонгер');
console.table (storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
