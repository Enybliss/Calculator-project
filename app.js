// Select the display
const display = document.getElementById("display");

// Function to clear display
function clearDisplay() {
    display.value = "";
}

// Function to delete last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Function to append values to display
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

// Remove any existing event listeners (fixing double-click issue)
document.querySelector(".buttons").replaceWith(document.querySelector(".buttons").cloneNode(true));

// Attach new event listener for buttons
document.querySelector(".buttons").addEventListener("click", (event) => {
    const target = event.target;
    const value = target.textContent;

    if (target.classList.contains("number") || target.classList.contains("operator") || target.classList.contains("decimal")) {
        appendToDisplay(value);
    } else if (target.classList.contains("equal")) {
        calculateResult();
    } else if (target.classList.contains("clear")) {
        clearDisplay();
    } else if (target.classList.contains("delete")) {
        deleteLast();
    } else if (target.classList.contains("square")) {
        square();
    }
});
