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
            break;
        case "2":
            document.getElementById("2").onclick = document.getElementById("2").src = "/img/win.png";
            break;
        case "3":
            document.getElementById("3").onclick = document.getElementById("3").src = "/img/win.png";
            break;
        case "4":
            document.getElementById("4").onclick = document.getElementById("4").src = "/img/linux.png";
            break;
    }
}