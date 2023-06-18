const inputRef = document.querySelector('#validation-input');

const inputLength = Number(inputRef.dataset.length);

inputRef.addEventListener('blur', lengthСheckInput);

function lengthСheckInput(event) {
    const input = event.currentTarget.value;

    if (input.length === inputLength) {
        inputRef.classList.add('valid');    
        inputRef.classList.remove('invalid');
    } else {
        inputRef.classList.add('invalid');
        inputRef.classList.remove('valid');
    }
}

