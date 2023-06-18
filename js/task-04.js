const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueRef = document.querySelector('#value');

decrementBtn.addEventListener('click', decrementValue);
incrementBtn.addEventListener('click', incrementValue);

let counterValue = 0;

function incrementValue() {
    counterValue += 1;
    valueRef.textContent = counterValue;

}
function decrementValue() {
    counterValue -= 1;
    valueRef.textContent = counterValue;
}

