function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const elements = {
  body: document.querySelector('body'),
  button: document.querySelector('.change-color'),
  span: document.querySelector('.color'),
};

elements.button.addEventListener('click', onBtnClick);

function onBtnClick(event) {
  elements.body.style.backgroundColor = `${getRandomHexColor()}`;
  elements.span.textContent = elements.body.style.backgroundColor;
}
