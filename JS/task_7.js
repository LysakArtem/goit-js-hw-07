const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

const handleInput = (event) => {
    const inputValue = event.target.value;
    const fontSize = inputValue / 50;
    textRef.setAttribute('style', `font-size:${fontSize}rem`);
}

inputRef.addEventListener('input', handleInput);

