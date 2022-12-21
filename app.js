// addition function
function toAdd(a, b) {
    return a + b
}

// substraction function
function toSubtract(a, b) {
    return a - b
}

// multiplication function
function toMultiply(a, b) {
    return a * b
}

// division function
function toDivide(a, b) {
    return a / b
}

// operation function
function operate(opr, a, b) {
    switch (opr) {
        case '+':
            return toAdd(a, b);
            break;
        case '-':
            return toSubtract(a, b);
            break;
        case '*':
            return toMultiply(a, b);
            break;
        case '/':
            return toDivide(a, b);
    }
}