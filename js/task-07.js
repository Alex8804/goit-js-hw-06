const elements = {
  fontSizeCtrl: document.querySelector('#font-size-control'),
  spanText: document.querySelector('#text'),
};

elements.fontSizeCtrl.addEventListener('input', onInputChange);

function onInputChange(event) {
  elements.spanText.style.fontSize = `${event.currentTarget.value}px`;
}
