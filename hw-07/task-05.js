'use strict';
const input = document.querySelector ('#name-input');
const nameOutput = document.querySelector ('#name-output');
input.addEventListener ('input', handleInput);

function handleInput (event) {
  if (event.currentTarget.value !== '') {
    nameOutput.textContent = event.currentTarget.value;
  }
};
