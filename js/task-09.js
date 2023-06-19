const body = document.querySelector('body');
const changeColorBtn = document.querySelector('.change-color');
const spanRef = document.querySelector('.color');

changeColorBtn.addEventListener('click', onBodyChangeColor);

function onBodyChangeColor() {
  const actualColor = getRandomHexColor();
  body.style.backgroundColor = actualColor;
  spanRef.textContent = actualColor;

}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}