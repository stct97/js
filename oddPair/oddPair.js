function check(num) {
    if (num === '') {
        return document.body.innerHTML += "<li class='list-group-item list-group-item-danger text-center'>Put a number!</li>";
    }
    if (num == 0) {
        return document.body.innerHTML += "<li class='list-group-item list-group-item-warning text-center'>Zero is pair mathematically!</li>";
    }
    if (num % 2 == 0) {
        return document.body.innerHTML += "<li class='list-group-item list-group-item-primary text-center'>Pair</li>";
    } else {
        return document.body.innerHTML += "<li class='list-group-item list-group-item-info text-center'>Odd</li>";
    }
}