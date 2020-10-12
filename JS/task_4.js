const counterValueRef  = document.querySelector('#value');
let counterValue = parseInt(counterValueRef.textContent);
function increment(){
    counterValue += 1;
    counterValueRef.textContent = counterValue;
}
function decrement(){
    counterValue -= 1
    counterValueRef.textContent = counterValue;
}

const IncrementButtonRef = document.querySelector('[data-action="increment"]');
const DecrementButtonRef = document.querySelector('[data-action="decrement"]')

IncrementButtonRef.addEventListener('click', increment);
DecrementButtonRef.addEventListener('click', decrement);