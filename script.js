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
    // TODO: Cleanup decimal handling
    if(operator) {
        if (number === "."){
            if(!number2.includes(".")) {
                number2 += number
                displayNumber(number2)
            }
        } else {
            number2 += number
            displayNumber(number2)
        }
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
    if(numberToDisplay === "") {
        display.textContent = "";
    } else if (!Number.isInteger(+numberToDisplay)) {
        display.textContent = Number(numberToDisplay).toFixed(2)
    } else {
    display.textContent = numberToDisplay
    }
}

// Equals Button
// TODO: Pressing equals multiple times causes error, add check to make sure 
// all parts of operation are defined before evaluationg
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
// TODO: Add check for dividing by 0
function divide(number1, number2) {
    return Number(number1) / Number(number2);
}