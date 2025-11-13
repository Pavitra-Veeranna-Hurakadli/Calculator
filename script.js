let display = document.getElementById("display");
let string = "";

function appendToDisplay(value) {
    string += value;
    display.value = string;
}

function clearDisplay() {
    string = "";
    display.value = "0";
}

function calculateResult() {
    try {
        string = eval(string);
        display.value = string;
    } catch (error) {
        display.value = "Error";
        string = "";
    }
}
