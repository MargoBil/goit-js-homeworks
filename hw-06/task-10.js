'use strict';
import users from './users.js';

const getSortedUniqueSkills = users => {
  const allSkillsOfUsers = users
    .reduce ((allSkills, user) => {
      allSkills.push (...user.skills);
      return allSkills;
    }, [])
    .sort ();

  const uniqueSkillsOfUsers = [];
  allSkillsOfUsers.forEach (skill => {
    if (!uniqueSkillsOfUsers.includes (skill)) {
      uniqueSkillsOfUsers.push (skill);
    }
  });

  return uniqueSkillsOfUsers;
};

console.log (getSortedUniqueSkills (users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
