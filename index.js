const $numbers = document.querySelectorAll('.number');
const display = document.querySelector('#display');
const $operators = document.querySelectorAll('.operators');
$numbers.forEach($numbers => $numbers.addEventListener('click', () => {
    display.append($numbers.innerHTML);
}));
$operators.forEach($operators => $operators.addEventListener('click', () => {
    let curOperator = display.innerHTML;
    if(curOperator.charAt(curOperator.length - 1) == /[^0-9]/){
        display.append($operators.innerHTML);
    }
    else{
        
    }
}));
function add(op1, op2){
    return op1 + op2;
}
function subtract(op1, op2){
    return op1 - op2;
}
function multiply(op1, op2){
    return op1 * op2;
}
function divide(op1, op2){
    return op1 / op2;
}
function evaluate(){
}
function operator(){
}
