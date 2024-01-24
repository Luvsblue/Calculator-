document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('keydown', function (event) {
        if (event.key.match(/[0-9]/)) {
            appendToDisplay(event.key);
        } else if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/') {
            appendToDisplay(event.key);
        } else if (event.key === 'Enter') {
            calculateResult();
        } else if (event.key === 'Escape') {
            clearDisplay();
        } else if (event.key === '.') {
            appendToDisplay(event.key);
        } else if (event.key === '%') {
            appendToDisplay(event.key);
        } else {
            alert('Only numbers, basic operators (+, -, *, /), . and % are allowed');
        }
    });
});

let display = document.getElementById('display');
let currentExpression = '';

function appendToDisplay(value) {
    currentExpression += value;
    display.innerText = currentExpression;
}

function calculateResult() {
    try {
        let result = eval(currentExpression);
        display.innerText = result;
        currentExpression = result.toString();
    } catch (error) {
        alert('Invalid expression');
        clearDisplay();
    }
}

function clearDisplay() {
    currentExpression = '';
    display.innerText = '';
}