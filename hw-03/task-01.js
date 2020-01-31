'use strict';
const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};
user['mood'] = 'happy';
user['hobby'] = 'skydiving';
user['premium'] = 'false';
const keysOfUser = Object.keys (user);
for (const key of keysOfUser) {
  console.log (`${key} :`, user[key]);
}
