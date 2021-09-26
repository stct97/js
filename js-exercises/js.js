// Basic operations, types of data, prompt and alert. Doesn´t receive parametres.
/**
 * This function show a prompt where user put a 2 numbers
 * @returns sum of 2 numbers
 */
function sum() {
    var x = window.prompt("Put first number");
    var y = window.prompt("Put second number");
    return alert(parseFloat(x) + parseFloat(y))
}
/**
 * This function convar celsius to farenheit. Doesn´t receive parametres
 * @returns ºFarenheit
 */
function conGrades() {
    var celsius = window.prompt("Put grades celsius");
    var farenheit = parseInt(celsius) * parseInt(9) / parseInt(5) + parseFloat(32);
    return alert(celsius + "º grados celsius" + " is " + farenheit + "º Farenheit")
}
/**
 * This function show a prompt and user type a number. Doesn´t receive parametres.
 * @returns result of division
 */
function div() {
    var x = window.prompt("Put a num to div");
    return alert(parseFloat(x) / parseFloat(10))
}
/**
 * This script identify the type of var x. Doesn´t receive parametres
 * @returns alert with type the var
 */
function identify() {
    var x = [1];
    return alert(typeof x);
}

// If and else
/**
 * This function show if a number is odd or pair. Doesn´t receive parametres
 * @returns an alert with string result
 */
function oddPair() {
    var x = window.prompt("Input a number");
    if (parseInt(x) % 2 === 0) {
        return alert("pair")
    } else return alert("odd")
}
/**
 * This function check if input number by user is div between 5 and 11. Doesn´t receive parametres
 */
function checkDiv() {
    var x = window.prompt("Input a number");
    if (parseInt(x) % parseInt(11) === 0 && parseInt(x) % parseInt(5) === 0) {
        console.log("true")
    } else console.log("false")
}
/**
 * This function dosen´t receive parametres and show 2 prompt
 * @returns result of which number is the highest
 */
function checkWhichNumberIsHighest() {
    var x = window.prompt("Input a number");
    var y = window.prompt("Input a number");
    if (x > y) {
        return alert("First input is the highest")
    } else alert("Second input is the highest")
}
/**
 * Same that last function but using a ternary operator
 * @returns same result
 */
function checkWhichNumberIsHighestTernaryOperator() {
    return (x = window.prompt("Input a number")) > (y = window.prompt("Input a number")) ? alert("First input is the highest") : alert("Second input is the highest");
}

/**
 * This function check which is the first character of a string
 * @returns leter or number by alert
 */
function checkLetterOrNumber() {
    var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    var x = document.getElementById('texto').value;
    var r;
    for (var i = 0; i < 9; i++) {
        if (numbers[i] === x.charAt(0)) {
            r = "number";
            break;
        } else r = "leter"
    }
    return alert(r);
}
/**
 * This function check that sides of triangle will be 180 degres
 * @returns alert with 2 options: valir or not valid
 */
function checkTriangle() {
    var x = window.prompt("Input a side");
    var y = window.prompt("Input a side");
    var z = window.prompt("Input a side");
    if (parseFloat(x) + parseFloat(y) + parseFloat(z) == 180) {
        return alert("Valid!")
    } else return alert("Not valid!")
}

function checkCapitalize() {
    var x = window.prompt("Input a string");
    if(x.charAt(0) === x.charAt(0).toUpperCase()){
        return alert("First char capital!")
    } else return alert("Non capital first char!")
}

