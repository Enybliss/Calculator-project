// Select the display and all buttons
const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

// Function to clear display
function clearDisplay() {
    display.value = "";
}

// Function to delete last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Function to append clicked button values to display
function appendToDisplay(value) {
    let lastChar = display.value.slice(-1);

    // Prevent multiple consecutive operators
    if (['+', '-', '*', '/'].includes(value) && ['+', '-', '*', '/'].includes(lastChar)) {
        return;
    }

    // Prevent starting with an operator other than '-'
    if (display.value === "" && ['+', '*', '/'].includes(value)) {
        return;
    }

    display.value += value;
}

// Function to calculate result
function calculateResult() {
    try {
        let expression = display.value;

        // Prevent evaluation of invalid expressions
        if (!expression || /[+\-*/.]$/.test(expression)) {
            throw new Error("Invalid Expression");
        }

        let result = eval(expression);

        if (!isFinite(result)) {
            throw new Error("Math Error");
        }

        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}

// Function to square a number
function square() {
    if (!display.value || isNaN(display.value)) {
        display.value = "Error";
        return;
    }

    display.value = Math.pow(parseFloat(display.value), 2);
}

// Event listeners for button clicks
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "=") {
            calculateResult();
        } else if (value === "C") {
            clearDisplay();
        } else if (value === "←") {
            deleteLast();
        } else if (value === "x²") {
            square();
        } else {
            appendToDisplay(value);
        }
    });
});
