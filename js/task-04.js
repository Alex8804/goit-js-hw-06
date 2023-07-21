let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const span = document.querySelector('#value');

const onBtnDecrClick = event => {
  counterValue -= 1;
  span.textContent = counterValue;
};

const onBtnIncrClick = event => {
  counterValue += 1;
  span.textContent = counterValue;
};

decrementBtn.addEventListener('click', onBtnDecrClick);
incrementBtn.addEventListener('click', onBtnIncrClick);
