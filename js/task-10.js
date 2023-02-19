function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  inputNumber: document.querySelector('#controls > input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};

refs.createBtn.addEventListener('click', divToAddBoxes);
refs.destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const divToAddArray = [];
  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement('div');
    divEl.style.width = `${30 + 10 * i}px`;
    divEl.style.height = `${30 + 10 * i}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    divToAddArray.push(divEl);
  }
  return divToAddArray;
}

function divToAddBoxes() {
  let divToAdd = createBoxes(refs.inputNumber.value);
  return refs.boxes.append(...divToAdd);
}

function destroyBoxes() {
  boxes.innerHTML = '';
  refs.inputNumber.value = '';
}
