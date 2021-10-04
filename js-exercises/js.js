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
 * This function dosen´t receive parametres and show 2 prompt. Doesn´t receive parametres
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
 * Same that last function but using a ternary operator. Doesn´t receive parametres
 * @returns same result
 */
function checkWhichNumberIsHighestTernaryOperator() {
    return (x = window.prompt("Input a number")) > (y = window.prompt("Input a number")) ? alert("First input is the highest") : alert("Second input is the highest");
}

/**
 * This function check which is the first character of a string. Doesn´t receive parametres
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
 * This function check that sides of triangle will be 180 degres. Doesn´t receive parametres
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
/**
 * Check if first char of word is capital or not. Doesn´t receive parametres
 * @returns an alert with 2 options
 */
function checkCapitalize() {
    var x = window.prompt("Input a string");
    if (x.charAt(0) === x.charAt(0).toUpperCase()) {
        return alert("First char capital!")
    } else return alert("Non capital first char!")
}

/**
 * Little game that generate a number and the user have to try to know. Doesn´t receive parametres
 * @returns an alert with 2 posibilities
 */
function aleatoryNumber() {
    var x = window.prompt("Input a number!");
    if (parseFloat(x) === Math.floor((Math.random() * (10 - 0 + 1)) + 0)) {
        return alert("Yo win!")
    } else return alert("You lost!")
}
/**
 * Show a count. The limit is difined by user
 */
function useOfWhile1() {
    var x = window.prompt("Input a number!");
    var y = 0;
    while (y <= parseInt(x)) {
        console.log(y);
        y++;
    }
}
/**
 * Show a count x2. The limit is difined by user
 */
function useOfWhile2() {
    var x = window.prompt("Input a number!");
    var y = 0;
    while (y <= parseInt(x)) {
        console.log(y);
        y += 2;
    }
}

/**
 * Show a count. The limit is difined by user
 */
function useOfWhile3() {
    var x = window.prompt("Input a number!");
    var y = 0;
    while (y <= parseInt(x)) {
        console.log(y);
        y--;
    }
}

/**
 * Table of nine with while
 */
function useOfWhile4() {
    var y = 0;
    var z = 9;
    var operation;
    while (y <= 10) {
        operation = parseFloat(z) * parseFloat(y)
        console.log(y + " x 9 = " + operation);
        y++;
    }
}
/*
function checkNumber() {
    var x = window.prompt("Input a number!");
    var y = ["0", 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var numbers = true;

    for (var i = 0; i < x.length; i++) {
        for (var j = 0; j < y.length; j++) {
            if (x.charAt[i] != y[j]) {
                numbers = false;
            }
        }
    }
    console.log(numbers)
}
*/
