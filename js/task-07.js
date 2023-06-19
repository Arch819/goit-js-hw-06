const inputRange = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

inputRange.addEventListener('input', changeFontSize);

function changeFontSize(event) {
    spanRef.style.fontSize = `${event.currentTarget.value}px`;
}