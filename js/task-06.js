const textInput = document.querySelector('#validation-input');

const onInputBlur = event => {
  if (
    event.currentTarget.value.trim().length === Number(textInput.dataset.length)
  ) {
    textInput.classList.add('valid');
    textInput.classList.remove('invalid');
  } else {
    textInput.classList.remove('valid');
    textInput.classList.add('invalid');
  }
};

textInput.addEventListener('blur', onInputBlur);
