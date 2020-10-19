const inputRef = document.querySelector('#name-input');
const nameOutpunRef = document.querySelector('#name-output');

const handleInputChange = (event) => {
    if(event.target.value === ''){
        nameOutpunRef.textContent = 'незнакомец';
    }
    else {
        nameOutpunRef.textContent = event.target.value;
    }
}

inputRef.addEventListener('input', handleInputChange);

