'use strict';
class Storage {
  constructor (array) {
    this.array = array;
  }
  getItems = function () {
    return this.array;
  };
  addItem = function (item) {
    this.array.push (item);
    storage.items = items;
  };
  removeItem = function (item) {
    if (this.array.indexOf (item) !== -1) {
      this.array.splice (this.array.indexOf (item), 1);
    } else {
      this.array.push (item);
    }
  };
}

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
