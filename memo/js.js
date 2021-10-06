var one = "one";
var two = "two";
var three = "three";
var four = "four";
var countX = 0;
var countY = 0;
var cont = 100;
var src = [ "/img/linux.png", "/img/linux.png", "/img/win.png", "/img/win.png"]
/**
 * 
 * @param {*} image 
 */
function change(image) {
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
}

/**
 * 
 */
function checkWin() {
    console.log(3)
    if (one === four && countX === 0) {
        countX++;
        alert("You win");
    } else if (two === three && countY === 0) {
        countY++;
        alert("You win");
    }
    
}

/**
 * 
 */
function contador(){
	var contador = document.getElementById("contador");
	contador.value = cont;
    if(cont == -1){
        setTimeout(function () {
            window.location.reload(1);
        }, 1000);
        alert("You lost!")
    }
    cont--;
}

function start(){
    setInterval('contador()',1000);
}


