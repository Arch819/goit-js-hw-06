const inputRef = document.querySelector('#name-input');
const spanOutput = document.querySelector('#name-output');

inputRef.addEventListener('input', pastText);

function pastText(event) {
    if (event.currentTarget.value !== '') {
        spanOutput.textContent = event.currentTarget.value;
    } else {
        spanOutput.textContent = "Anonymous";
    }   
}