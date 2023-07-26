/* Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation. */

function simpleCalc(num1, num2, operator) {
    if (operator === "+") {
        return num1 + num2;
    }
    else if (operator === "-") {
        return num1 - num2;
    }
    else if (operator === "*") {
        return num1 * num2;
    }
    else if (operator === "/") {
        if (num2 === 0) {
            return "Cannot divided by '0'";
        }
        return num1 / num2;
    }
};

console.log(simpleCalc(10, 10, "*"));