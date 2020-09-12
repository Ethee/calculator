//inits
let firstOperand = null;
let secondOperand = null;
let mathOperator = null;
const $numbers = document.querySelectorAll(".number");
const displayNumber = document.querySelector("#displayNumber");
const displayOperator = document.querySelector("#displayOperator");
const $operator = document.querySelectorAll(".operator");
const evalButton = document.querySelector("#evaluate");
const clearButton = document.querySelector("#clearAll");
const clearEntryButton = document.querySelector("#clearEntry");
const decimalButton = document.querySelector("#decimal");
const backspaceButton = document.querySelector("#backspace");
const percentButton = document.querySelector("#percent");
const invertButton = document.querySelector("#invert");
const squareButton = document.querySelector("#square");
const squareRtButton = document.querySelector("#squareRoot");
const negativeButton = document.querySelector("#negative");
//clear display init whitespace
displayNumber.innerText = "0";
displayOperator.innerText = "";

const numberButtons = $numbers.forEach(($numbers) =>
  $numbers.addEventListener("click", () => {
    if (
      displayNumber.getAttribute("data-count") === "1" &&
      displayOperator.innerText === ""
    ) {
      displayNumber.innerText = $numbers.innerText;
      displayNumber.setAttribute("data-count", 0);
    } else if (
      (displayNumber.innerText.length < 10) |
      (displayOperator.innerText !== "")
    ) {
      if (displayOperator.innerText !== "") {
        firstOperand = displayNumber.innerText;
        console.log(firstOperand);
        mathOperator = displayOperator.innerText;
        displayNumber.innerText = "";
        displayOperator.innerText = "";
      }
      if (
        (displayNumber.innerText === "0") |
        isNaN(parseInt(displayNumber.innerText))
      ) {
        displayNumber.innerText = $numbers.innerText;
        displayNumber.setAttribute("data-count", 0);
      } else {
        displayNumber.innerText += $numbers.innerText;
      }
    }
  })
);
const operatorButtons = $operator.forEach(($operator) =>
  $operator.addEventListener("click", () => {
    if (firstOperand === null) {
      displayOperator.innerText = $operator.innerText;
    } else {
      secondOperand = displayNumber.innerText;
      evaluate(firstOperand, secondOperand, mathOperator);
      mathOperator = $operator.innerText;
    }
  })
);
const equalsButton = evalButton.addEventListener("click", () => {
  secondOperand = displayNumber.innerText;
  evaluate(firstOperand, secondOperand, mathOperator);
  firstOperand = null;
});

const clearAll = clearButton.addEventListener("click", () => {
  displayNumber.innerText = "0";
  displayOperator.innerText = "";
  firstOperand = null;
  secondOperand = null;
});
const clearEntry = clearEntryButton.addEventListener("click", () => {
  displayNumber.innerText = "0";
  displayOperator.innerText = "";
});
const makeDecimal = decimalButton.addEventListener("click", () => {
  if (displayNumber.innerText.includes(".")) {
  } else {
    displayNumber.innerText += ".";
  }
});
const backspace = backspaceButton.addEventListener("click", () => {
  if (displayNumber.innerText.length !== 1) {
    displayNumber.innerText = displayNumber.innerText.slice(0, -1);
  } else {
    displayNumber.innerText = 0;
  }
});
const percentage = percentButton.addEventListener("click", () => {
  if (displayOperator.innerText === "") {
    let percent = parseFloat(displayNumber.innerText);
    percent = percent / 100;
    console.log(percent);
    displayNumber.setAttribute("data-count", 1);
    if (percent.toString().length > 10) {
      displayNumber.innerText = percent;
    } else {
      displayNumber.innerText = percent;
    }
  }
});
const invert = invertButton.addEventListener("click", () => {
  if (displayOperator.innerText === "") {
    let inverted = parseFloat(displayNumber.innerText);
    inverted = 1 / inverted;
    displayNumber.setAttribute("data-count", 1);
    if (inverted.toString().length > 10) {
      displayNumber.innerText = inverted.toExponential(7);
    } else {
      displayNumber.innerText = inverted;
    }
  }
});
const square = squareButton.addEventListener("click", () => {
  if (displayOperator.innerText === "") {
    let exponential = parseFloat(displayNumber.innerText);
    exponential = exponential * exponential;
    displayNumber.setAttribute("data-count", 1);
    if (exponential.toString().length > 10) {
      displayNumber.innerText = exponential.toExponential(7);
    } else {
      displayNumber.innerText = exponential;
    }
  }
});
const squareRoot = squareRtButton.addEventListener("click", () => {
  let root = parseFloat(displayNumber.innerText);
  root = Math.sqrt(root);
  displayNumber.setAttribute("data-count", 1);
  if (root.toString().length > 10) {
    displayNumber.innerText = root.toExponential(7);
  } else {
    displayNumber.innerText = root;
  }
});
const negative = negativeButton.addEventListener("click", () => {
  if (displayNumber.innerText.includes("-")) {
    displayNumber.innerText = Math.abs(parseFloat(displayNumber.innerText));
  } else {
    displayNumber.innerText = -Math.abs(parseFloat(displayNumber.innerText));
  }
});

function evaluate(num1, num2, operator) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  console.log(num1, num2);
  switch (operator) {
    case "+":
      secondOperand = num1 + num2;
      break;
    case "-":
      secondOperand = num1 - num2;
      break;
    case "x":
      secondOperand = num1 * num2;
      break;
    case "/":
      secondOperand = num1 / num2;
      break;
  }
  //if result takes up more than calculator space convert to sci notation
  if (secondOperand.toString().length > 10) {
    secondOperand = secondOperand.toExponential(7);
  }
  displayNumber.innerText = secondOperand;
  displayOperator.innerText = "";
  firstOperand = secondOperand;
  displayNumber.setAttribute("data-count", 1);
}
