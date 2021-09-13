function check(num) {
    if (num === '') {
        return document.body.innerHTML += "<li class='list-group-item list-group-item-danger'>Put a number!</li>";
    }
    if (num == 0) {
        return document.body.innerHTML += "<li class='list-group-item list-group-item-warning'>Zero is pair mathematically!</li>";
    }
    if (num % 2 == 0) {
        return document.body.innerHTML += "<li class='list-group-item list-group-item-primary'>Pair</li>";
    } else {
        return document.body.innerHTML += "<li class='list-group-item list-group-item-info'>Odd</li>";
    }
}