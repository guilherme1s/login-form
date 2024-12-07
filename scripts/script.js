const inputEmail = document.querySelector(".loginInputEmail");
const inputPassword = document.querySelector('.loginInputPassword');
const loginButton = document.querySelector('.loginButton');

function validateInputs() {
    const isEmailInputEmpty = inputEmail.value === "";
    const isPasswordInputEmpty = inputPassword.value === "";

    if(isEmailInputEmpty || isPasswordInputEmpty) {
        loginButton.disabled = true;
        loginButton.style.cursor = "not-allowed";
        loginButton.style.backgroundColor = "gray";
    } else {
        loginButton.disabled = false;
        loginButton.style.cursor = "pointer";
        loginButton.style.backgroundColor = "white";
    }
}

inputEmail.addEventListener('input', validateInputs);
inputPassword.addEventListener('input', validateInputs);

validateInputs();


