let number1;
let number2;
let operator;

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