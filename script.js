function value(val) {
    const inputField = document.getElementById("firstNumber");

    // If the value is 'π' or 'e', set the input value to the corresponding number
    if (val === 'π') {
        inputField.value = Math.PI;  // Use Math.PI for π
    } else if (val === 'e') {
        inputField.value = Math.E;   // Use Math.E for Euler's number
    } else {
        // Otherwise, append the value to the current input field
        inputField.value += val;
    }
}

function add() {
    // Ensure both values are treated as numbers
    let firstN = parseFloat(document.getElementById("firstNumber").value);
    let secondN = parseFloat(document.getElementById("secondNumber").value);

    // Check if either value is NaN
    if (isNaN(firstN) || isNaN(secondN)) {
        alert("Please enter valid numbers.");
        return;
    }

    let result = firstN + secondN;
    alert("Addition result is: " + result);
}



function sub() {
    let firstN = Number(document.getElementById("firstNumber").value);
    let secondN = Number(document.getElementById("secondNumber").value);
    alert("Subtraction of " + firstN + " and " + secondN + " is : " + (firstN - secondN));
}

function mult() {
    let firstN = Number(document.getElementById("firstNumber").value);
    let secondN = Number(document.getElementById("secondNumber").value);
    alert("Multiplication of " + firstN + " and " + secondN + " is : " + (firstN * secondN));
}

function div() {
    let firstN = Number(document.getElementById("firstNumber").value);
    let secondN = Number(document.getElementById("secondNumber").value);
    if(secondN === 0) {
        alert("Error: Division by zero is not allowed.");
    } else {
        alert("Division of " + firstN + " and " + secondN + " is : " + (firstN / secondN));
    }
}

function fact() {
    let firstN = Number(document.getElementById("firstNumber").value);
    let fact = 1;
    for (let i = 1; i <= firstN; i++) {
        fact *= i;
    }
    alert("Factorial of " + firstN + " is : " + fact);
}

function mod() {
    let firstN = Number(document.getElementById("firstNumber").value);
    let secondN = Number(document.getElementById("secondNumber").value);
    alert("Modulus of " + firstN + " and " + secondN + " is : " + (firstN % secondN));
}

function sin() {
    let firstN = Number(document.getElementById("firstNumber").value);
    let result = Math.sin(firstN * Math.PI / 180); // Convert to radians
    alert("Sin of " + firstN + " degrees is : " + result);
}

function cos() {
    let firstN = Number(document.getElementById("firstNumber").value);
    let result = Math.cos(firstN * Math.PI / 180); // Convert to radians
    alert("Cos of " + firstN + " degrees is : " + result);
}

function tan() {
    let firstN = Number(document.getElementById("firstNumber").value);
    let result = Math.tan(firstN * Math.PI / 180); // Convert to radians
    alert("Tan of " + firstN + " degrees is : " + result);
}
function log() {
    let firstN = Number(document.getElementById("firstNumber").value);
    if (firstN <= 0) {
        alert("Error: Logarithm is only defined for positive numbers.");
        return;
    }
    let result = Math.log10(firstN); // Use log10 for base 10 logarithm
    alert("Log of " + firstN + " (base 10) is : " + result);
}



function AC() {
    document.getElementById("firstNumber").value = "";
    document.getElementById("secondNumber").value = "";
}

function openParenthesis() {
    document.getElementById("firstNumber").value += "(";
}

function closeParenthesis() {
    document.getElementById("firstNumber").value += ")";
}

function equals() {
    let firstN = Number(document.getElementById("firstNumber").value);
    alert("Result: " + firstN);  // Just an example; you can enhance this for proper evaluation
}

function root() {
    let firstN = Number(document.getElementById("firstNumber").value);
    let result = Math.sqrt(firstN);
    alert("Square root of " + firstN + " is : " + result);