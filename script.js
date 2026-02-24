let number1 = "";
let number2 = "";
let operator = "";

// Number Buttons
const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
    number.addEventListener("click", (e) => {
        setNumber(e.target.textContent)
    })
})

function setNumber(number) {
    if(operator) {
        number2 += number
        displayNumber(number2)
    } else {
        number1 += number
        displayNumber(number1)
    }
}

// Operator Buttons
const operators = document.querySelectorAll(".operator");
operators.forEach((operator) => {
    operator.addEventListener("click", (e) => {
        setOperator(e.target.textContent)
    })
})

function setOperator(operatorChoice) {
    operator = operatorChoice
}

// Display
const display = document.querySelector("#display");
function displayNumber(numberToDisplay) {
    display.textContent = numberToDisplay
}

// Calculator Functions
function operate (number1, number2, operator) {
    if(operator === "+") {
        return (add(number1, number2))
    }
    if(operator === "-") {
        return (subtract(number1, number2))
    }
    if(operator === "*") {
        return (multiply(number1, number2))
    }
    if(operator === "/") {
        return (divide(number1, number2))
    }
}

function add(number1, number2) {
    return number1 + number2;
}
function subtract(number1, number2) {
    return number1 - number2;
}
function multiply(number1, number2) {
    return number1 * number2; 
}
function divide(number1, number2) {
    return number1 / number2;    
}