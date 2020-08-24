const inputRef=document.querySelector('#font-size-control');
const textRef=document.querySelector('#text');

inputRef.addEventListener('input', handleInput);
function handleInput(event){
    const inputValue=event.target.value;
    const fontSize= (event.target.value/50);
    textRef.setAttribute('style',`font-size:${fontSize}rem`);
}
