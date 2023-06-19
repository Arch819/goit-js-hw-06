const form = document.querySelector('.login-form');

form.addEventListener('submit', submitLoginForm);

function submitLoginForm(event) {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;
    const userEmail = email.value;
    const userPassword = password.value;

    if (userEmail === '' || userPassword === '') {
        alert('Всі поля повинні бути заповнені');
    }

    const userData = {
        email: userEmail,
        password: userPassword,
    };
    console.dir(userData);
    event.currentTarget.reset();
}
