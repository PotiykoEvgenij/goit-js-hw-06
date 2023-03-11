const validationInput = document.querySelector('#validation-input');

function validationInputBlur(event) {
    const inputLength = Number(event.currentTarget.dataset.length);
    const inputLengthText = event.currentTarget.value.length;

    if (inputLength === inputLengthText) {
        event.currentTarget.classList.add("valid");
        event.currentTarget.classList.remove("invalid");
    } else {
        event.currentTarget.classList.add("invalid");
        event.currentTarget.classList.remove("valid");
    }
};

validationInput.addEventListener("blur", validationInputBlur);