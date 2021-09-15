/**
 * This function show a prompt where user put a 2 numbers
 * @returns sum of 2 numbers
 */
function sum() {
    x = window.prompt("Introduzca el primer numero");
    y = window.prompt("Introduzca el segundo numero");
    return alert(parseFloat(x) + parseFloat(y))
}
/**
 * This function convar celsius to farenheit
 * @returns ºFarenheit
 */
function convarGrades() {
    celsius = window.prompt("Introduzca los grados celsius");
    farenheit = parseInt(celsius) * parseInt(9) / parseInt(5) + parseFloat(32);
    return alert(celsius + "º grados celsius" + " son " + farenheit + "º Farenheit")
}
/**
 * This function show a prompt and user type a number
 * @returns result of division
 */
function div() {
    x = window.prompt("Introduzca el numero a dividir");
    return alert(parseFloat(x) / parseFloat(10))
}
/**
 * This script identify the type of var x
 * @returns alert with type the var
 */
function identify() {
    x = [1];
    return alert(typeof x);
}