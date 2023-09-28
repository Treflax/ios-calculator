let display = document.getElementById('display');
let currentValue = '';
let operator = '';
let resultCalculated = false;

function appendToDisplay(value) {
    if (resultCalculated) {
        currentValue = '';
        resultCalculated = false;
    }
    currentValue += value;
    display.value = currentValue;
}

function setOperator(op) {
    if (op === '%') {
        currentValue = eval(currentValue + '* 0.01');
        display.value = currentValue;
    } else if (operator === '') {
        currentValue += op;
        display.value = currentValue;
    }
    resultCalculated = false;
}

function changeSign() {
    currentValue = -parseFloat(currentValue);
    display.value = currentValue;
}

function calculateResult() {
    try {
        currentValue = eval(currentValue);
        display.value = currentValue;
        resultCalculated = true;
    } catch (error) {
        alert('Ошибка ввода!');
        clearDisplay();
    }
}

function clearDisplay() {
    currentValue = '';
    operator = '';
    display.value = '';
    resultCalculated = false;
}

