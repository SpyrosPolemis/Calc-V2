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
operators.forEach((operatorBtn) => {
    operatorBtn.addEventListener("click", (e) => {
        if (!operator) {
            setOperator(e.target.textContent)
        } else if (number1, number2, operator) {
            number1 = operate(number1, number2, operator)
            displayNumber(number1)
            setOperator(e.target.textContent)
            number2 = ""
        }
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

// Equals Button
const equalsBtn = document.querySelector("#equals-btn");
equalsBtn.onclick = () => {
    number1 = (operate(number1, number2, operator))
    displayNumber(number1)
    setOperator("")
    number2 = ""
};

// Clear Button
const clearBtn = document.querySelector("#clear-btn");
clearBtn.onclick = 
function clearCalc() {
    number1 = "";
    number2 = "";
    setOperator("")
    displayNumber("")
}

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