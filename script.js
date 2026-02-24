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
    operator = operatorChoice;
}

// Display
const display = document.querySelector("#display");
function displayNumber(numberToDisplay) {
    display.textContent = numberToDisplay
}

// Evaluating
const equalsBtn = document.querySelector("#equals-btn");
equalsBtn.onclick = () => {
    number1 = (operate(number1, number2, operator))
    displayNumber(number1)
    setOperator("")
    number2 = ""
};

// Calculator Functions
function operate (number1, number2, operator) {
    if(operator === "+") {
        return (add(number1, number2))
    } else if(operator === "-") {
        return (subtract(number1, number2))
    } else if(operator === "X") {
        return (multiply(number1, number2))
    } else if(operator === "/") {
        return (divide(number1, number2))
    } else {
        console.log("Error")
    }
}

function add(number1, number2) {
    return Number(number1) + Number(number2);
}
function subtract(number1, number2) {
    return Number(number1) - Number(number2);
}
function multiply(number1, number2) {
    return Number(number1) * Number(number2);
}
function divide(number1, number2) {
    return Number(number1) / Number(number2);
}