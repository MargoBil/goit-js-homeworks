'use strict';
import users from '/users.js';

const getUsersWithFriend = (users, friendName) =>
  users
    .filter (user => {
      if (user.friends.includes(friendName)) {
        return user.friends;
      }
    })
    .map (user => user.name);

console.log (getUsersWithFriend (users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log (getUsersWithFriend (users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
