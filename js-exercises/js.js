function suma() {
    x = window.prompt("Introduzca el primer numero");
    y = window.prompt("Introduzca el segundo numero");
    return alert(parseFloat(x) + parseFloat(y))
}

function convarGrades() {
    celsius = window.prompt("Introduzca los grados celsius");
    farenheit = parseInt(celsius) * parseInt(9) / parseInt(5) + parseFloat(32);
    return alert(celsius + "º grados celsius" + " son " + farenheit + "º Farenheit")
}