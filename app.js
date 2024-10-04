function clearDisplay() {
    document.getElementById('display').value = "";
}

function deleteLast() {
    let display = document.getElementById('display').value;
    document.getElementById('display').value = display.slice(0, -1);
}

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculateResult() {
    try {
        let result = eval(document.getElementById('display').value);

        document.getElementById('display').value = result;
    }   catch (error) {
        
        document.getElementById('display').value = 'Error';
    }
}

function square() {
    let display = document.getElementById('display').value;

    if (display) {
        let squaredValue = Math.pow(display, 2);

        document.getElementById('display').value = squaredValue
    }
}