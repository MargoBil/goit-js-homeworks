'use strict';

const decrement = document.querySelector (
  '#counter > [data-action="decrement"]'
);
const increment = document.querySelector (
  '#counter > [data-action="increment"]'
);
const counter = document.querySelector ('#value');
let counterValue = 0;
decrement.addEventListener ('click', handleDecrement);
increment.addEventListener ('click', handleIncrement);

function handleDecrement () {
  counterValue = counterValue -= 1;
  counter.textContent = counterValue;
}

function handleIncrement () {
  counterValue = counterValue += 1;
  counter.textContent = counterValue;
}
