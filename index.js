//inits
let firstOperand = null;
let secondOperand = null;
let mathOperator = null;
const $numbers = document.querySelectorAll('.number');
const displayNumber = document.querySelector('#displayNumber');
const displayOperator = document.querySelector('#displayOperator');
const $operator = document.querySelectorAll('.operator');
const evalButton = document.querySelector('#evaluate');
const clearButton = document.querySelector('#clearAll');
const clearEntryButton = document.querySelector('#clearEntry');
const decimalButton = document.querySelector('#decimal');
//clear display init whitespace
displayNumber.innerText = "0";
displayOperator.innerText = "";

const numberButtons = $numbers.forEach($numbers => $numbers.addEventListener('click', () => {
    if(displayNumber.getAttribute('data-count') === "1" && displayOperator.innerText === ""){
        displayNumber.innerText = ($numbers.innerText);
        displayNumber.setAttribute('data-count', 0);
    }
    else if(displayNumber.innerText.length < 10 | displayOperator.innerText !== ""){
        if(displayOperator.innerText !== ""){
            firstOperand = displayNumber.innerText;
            console.log(firstOperand);
            mathOperator = displayOperator.innerText;
            displayNumber.innerText = "";
            displayOperator.innerText = "";
        }
        if(displayNumber.innerText === "0" | isNaN(parseInt(displayNumber.innerText))){
            displayNumber.innerText = ($numbers.innerText);
            displayNumber.setAttribute('data-count', 0);
        }
        else{
            displayNumber.innerText += ($numbers.innerText);
        }
    }
}));
const operatorButtons = $operator.forEach($operator => $operator.addEventListener('click', () => {
    if(firstOperand === null){
        displayOperator.innerText = $operator.innerText;
    }
    else{
        secondOperand = displayNumber.innerText;
        evaluate(firstOperand, secondOperand, mathOperator);
        mathOperator = $operator.innerText;
    }
}));
const equalsButton = evalButton.addEventListener('click', () => {
    secondOperand = displayNumber.innerText;
    evaluate(firstOperand, secondOperand, mathOperator);
    firstOperand = null;
});
const clearAll = clearButton.addEventListener('click', () => {
    displayNumber.innerText = "0";
    displayOperator.innerText = "";
    firstOperand = null;
    secondOperand = null;
});
const clearEntry = clearEntryButton.addEventListener('click', () => {
    displayNumber.innerText = "0";
    displayOperator.innerText = "";
});
const makeDecimal = decimalButton.addEventListener('click', () => {
    if(displayNumber.innerText !== /^\d+\.?\d*$/){
        displayNumber.innerText += ".";
    }
});
function evaluate(num1, num2, operator){
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    console.log(num1, num2);
    switch(operator){
        case '+':
            secondOperand = num1 + num2;
            break;
        case '-':
            secondOperand = num1 - num2;
            break;
        case 'x':
            secondOperand = num1 * num2;
            break;
        case '/':
            secondOperand = num1 / num2;
            break;
    }
    //if result takes up more than calculator space convert to sci notation
    if(secondOperand.toString().length > 10){
        secondOperand = secondOperand.toExponential(7);
    }
    displayNumber.innerText = secondOperand;
    displayOperator.innerText = "";
    firstOperand = secondOperand;
    displayNumber.setAttribute('data-count', 1);
}
