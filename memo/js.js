var one = "one";
var two = "two";
var three = "three";
var four = "four";
var countX = 0;
var countY = 0;
function change(image) {
    console.log(1);
    /*if (document.getElementById("1").value == "1") {
        console.log(2);
        document.getElementById("1").onclick = document.getElementById("1").src = "/img/linux.png";
    } else if (document.getElementById("2") == "2") {
        document.getElementById("2").onclick = document.getElementById("2").src = "/img/win.png"
    }*/
    switch (image.id) {
        case "1":
            document.getElementById("1").onclick = document.getElementById("1").src = "/img/linux.png";
            one = document.getElementById("1").src;
            break;
        case "2":
            document.getElementById("2").onclick = document.getElementById("2").src = "/img/win.png";
            two = document.getElementById("2").src;
            break;
        case "3":
            document.getElementById("3").onclick = document.getElementById("3").src = "/img/win.png";
            three = document.getElementById("3").src;
            break;
        case "4":
            document.getElementById("4").onclick = document.getElementById("4").src = "/img/linux.png";
            four = document.getElementById("4").src;
            break;
    }
    console.log(one);
    console.log(two);
    console.log(three);
    console.log(four);
}
function checkWin() {
    console.log(3)
    if (one === four && countX === 0) {
        countX++;
        alert("You win");
    } else if (two == three && countY === 0) {
        countY++;
        alert("You win");
    }
}
