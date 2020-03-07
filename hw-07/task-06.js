'use strict';
const input = document.querySelector ('#validation-input');
console.log (input);
input.addEventListener ('change', validationCheck);

function validationCheck (event) {
  const needfulLengthOfInput = Number (input.getAttribute ('data-length'));
  if (needfulLengthOfInput === event.currentTarget.value.length) {
    input.classList.add ('valid');
  } else {
    input.classList.add ('invalid');
  };
}
