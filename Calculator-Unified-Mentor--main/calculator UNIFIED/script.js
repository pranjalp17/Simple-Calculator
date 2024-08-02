document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    let currentInput = '0';
    let previousInput = '';
    let operator = '';
    let awaitingNextValue = false;

    function updateDisplay() {
        display.textContent = currentInput;
    }

    function handleNumber(number) {
        if (awaitingNextValue) {
            currentInput = number;
            awaitingNextValue = false;
        } else {
            currentInput = currentInput === '0' ? number : currentInput + number;
        }
        updateDisplay();
    }

    function handleOperator(nextOperator) {
        const inputValue = parseFloat(currentInput);
        if (operator && awaitingNextValue) {
            operator = nextOperator;
            return;
        }
        if (previousInput === '') {
            previousInput = inputValue;
        } else if (operator) {
            const result = performCalculation[operator](previousInput, inputValue);
            currentInput = `${parseFloat(result.toFixed(7))}`;
            previousInput = result;
        }
        awaitingNextValue = true;
        operator = nextOperator;
        updateDisplay();
    }

    const performCalculation = {
        '/': (first, second) => first / second,
        '*': (first, second) => first * second,
        '+': (first, second) => first + second,
        '-': (first, second) => first - second,
    };

    function handleClear() {
        currentInput = '0';
        previousInput = '';
        operator = '';
        awaitingNextValue = false;
        updateDisplay();
    }

    function handleDecimal() {
        if (!currentInput.includes('.')) {
            currentInput += '.';
        }
        updateDisplay();
    }

    function handleEquals() {
        if (operator && !awaitingNextValue) {
            const result = performCalculation[operator](parseFloat(previousInput), parseFloat(currentInput));
            currentInput = `${parseFloat(result.toFixed(7))}`;
            previousInput = '';
            operator = '';
            updateDisplay();
        }
    }

    const buttons = document.querySelector('.buttons');
    buttons.addEventListener('click', event => {
        const { target } = event;
        if (!target.matches('button')) return;
        if (target.dataset.number) {
            handleNumber(target.textContent);
        } else if (target.dataset.action === 'operator') {
            handleOperator(target.textContent);
        } else if (target.dataset.action === 'clear') {
            handleClear();
        } else if (target.dataset.action === 'decimal') {
            handleDecimal();
        } else if (target.dataset.action === 'equals') {
            handleEquals();
        }
    });
});
function handleEquals() {
    if (operator && !awaitingNextValue) {
        let result;
        const inputValue = parseFloat(currentInput);
        try {
            result = performCalculation[operator](parseFloat(previousInput), inputValue);
            if (isNaN(result) || !isFinite(result)) {
                throw new Error("Math Error");
            }
            currentInput = `${parseFloat(result.toFixed(7))}`;
        } catch (error) {
            currentInput = "Error";
        }
        previousInput = '';
        operator = '';
        updateDisplay();
    }
}
function handleSquareRoot() {
    try {
        const result = Math.sqrt(parseFloat(currentInput));
        if (isNaN(result) || !isFinite(result)) {
            throw new Error("Math Error");
        }
        currentInput = `${parseFloat(result.toFixed(7))}`;
    } catch (error) {
        currentInput = "Error";
    }
    updateDisplay();
}
function handlePercentage() {
    try {
        const result = parseFloat(currentInput) / 100;
        if (isNaN(result) || !isFinite(result)) {
            throw new Error("Math Error");
        }
        currentInput = `${parseFloat(result.toFixed(7))}`;
    } catch (error) {
        currentInput = "Error";
    }
    updateDisplay();
}
document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    let currentInput = '0';
    let previousInput = '';
    let operator = '';
    let awaitingNextValue = false;

    function updateDisplay() {
        display.textContent = currentInput;
    }

    function handleNumber(number) {
        if (awaitingNextValue) {
            currentInput = number;
            awaitingNextValue = false;
        } else {
            currentInput = currentInput === '0' ? number : currentInput + number;
        }
        updateDisplay();
    }

    function handleOperator(nextOperator) {
        const inputValue = parseFloat(currentInput);
        if (operator && awaitingNextValue) {
            operator = nextOperator;
            return;
        }
        if (previousInput === '') {
            previousInput = inputValue;
        } else if (operator) {
            const result = performCalculation[operator](previousInput, inputValue);
            currentInput = `${parseFloat(result.toFixed(7))}`;
            previousInput = result;
        }
        awaitingNextValue = true;
        operator = nextOperator;
        updateDisplay();
    }

    const performCalculation = {
        '/': (first, second) => first / second,
        '*': (first, second) => first * second,
        '+': (first, second) => first + second,
        '-': (first, second) => first - second,
    };

    function handleClear() {
        currentInput = '0';
        previousInput = '';
        operator = '';
        awaitingNextValue = false;
        updateDisplay();
    }

    function handleDecimal() {
        if (!currentInput.includes('.')) {
            currentInput += '.';
        }
        updateDisplay();
    }

    function handleEquals() {
        if (operator && !awaitingNextValue) {
            let result;
            const inputValue = parseFloat(currentInput);
            try {
                result = performCalculation[operator](parseFloat(previousInput), inputValue);
                if (isNaN(result) || !isFinite(result)) {
                    throw new Error("Math Error");
                }
                currentInput = `${parseFloat(result.toFixed(7))}`;
            } catch (error) {
                currentInput = "Error";
            }
            previousInput = '';
            operator = '';
            updateDisplay();
        }
    }

    const buttons = document.querySelector('.buttons');
    buttons.addEventListener('click', event => {
        const { target } = event;
        if (!target.matches('button')) return;
        if (target.dataset.number !== undefined) {
            handleNumber(target.textContent);
        } else if (target.dataset.action === 'operator') {
            handleOperator(target.textContent);
        } else if (target.dataset.action === 'clear') {
            handleClear();
        } else if (target.dataset.action === 'decimal') {
            handleDecimal();
        } else if (target.dataset.action === 'equals') {
            handleEquals();
        }
    });
});


const buttons = document.querySelector('.buttons');
buttons.addEventListener('click', event => {
    const { target } = event;
    if (!target.matches('button')) return;
    if (target.dataset.number !== undefined) {
        handleNumber(target.textContent);
    } else if (target.dataset.action === 'operator') {
        handleOperator(target.textContent);
    } else if (target.dataset.action === 'clear') {
        handleClear();
    } else if (target.dataset.action === 'decimal') {
        handleDecimal();
    } else if (target.dataset.action === 'equals') {
        handleEquals();
    }
});
