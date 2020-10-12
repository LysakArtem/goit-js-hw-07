const inputRef = document.querySelector('#validation-input');

const countValidCharacter = parseInt(inputRef.getAttribute('data-length'));

const handleInputBlur = (event) => {
    const inputValue = event.target.value;
    if (inputValue.length === countValidCharacter){
        inputRef.classList.remove('invalid');
        inputRef.classList.add('valid');
    }
    else {
        inputRef.classList.remove('valid');
        inputRef.classList.add('invalid');
    }
}

inputRef.addEventListener('blur', handleInputBlur);
