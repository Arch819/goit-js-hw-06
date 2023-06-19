const inputNumber = document.querySelector('[type="number"]');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const divBoxes = document.querySelector('#boxes');

createBtn.addEventListener('click', () => {
  createBoxes(Number(inputNumber.value));
});
destroyBtn.addEventListener('click', destroyBoxes);

let width = 30;
let height = 30;

function createBoxes(amount) {
  Array.from({ length: amount }).forEach(() => {
    const newElement = `<div style="background-color: ${getRandomHexColor()}; width: ${width}px; height: ${height}px;"></div>`;
    divBoxes.insertAdjacentHTML("beforeend", newElement);
    width += 10;
    height += 10;
  });
}

function destroyBoxes() {
  divBoxes.innerHTML = "";
  width = 30;
  height = 30;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
