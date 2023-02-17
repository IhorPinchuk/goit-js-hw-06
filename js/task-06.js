const validationInputEl = document.querySelector('#validation-input');

validationInputEl.addEventListener('blur', inputBlur);

function inputBlur(event) {
  if (event.currentTarget.value.length == 0) {
    validationInputEl.classList.remove('valid');
    validationInputEl.classList.remove('invalid');
    return;
  } else if (
    event.currentTarget.value.length ==
    validationInputEl.getAttribute('data-length')
  ) {
    validationInputEl.classList.remove('invalid');
    validationInputEl.classList.add('valid');
    return;
  } else {
    validationInputEl.classList.remove('valid');
    return validationInputEl.classList.add('invalid');
  }
}
