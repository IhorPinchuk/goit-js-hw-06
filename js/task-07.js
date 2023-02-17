const refs = {
  inputChange: document.querySelector('#font-size-control'),
  textChange: document.querySelector('#text'),
};

refs.inputChange.addEventListener(
  'input',
  event => (refs.textChange.style.fontSize = `${event.currentTarget.value}px`),
);
