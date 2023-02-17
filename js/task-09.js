function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  bodyColor: document.querySelector('body'),
  changeColorBtn: document.querySelector('.change-color'),
  valueColor: document.querySelector('.color'),
};

refs.changeColorBtn.addEventListener('click', changeColorPressButton);

function changeColorPressButton() {
  let color = getRandomHexColor();
  refs.bodyColor.style.backgroundColor = color;
  refs.valueColor.textContent = color;
}
