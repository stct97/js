/**
 * Array of strings with posibles faces
 */
const faces = ["dice/img/1.png","/dice/img/2.png","/dice/img/3.png","/dice/img/4.png","/dice/img/5.png","/dice/img/6.png"]

/**
 * 
 * @param {*posible} min 
 * @param {*posible} max 
 * @returns posible value between min-max
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  /**
   * Function that not received nothing. Obtain an element of html
   * @returns new url face
   */
function throwDice(){
    let int = getRandomInt(0,6)
    return document.getElementById("face").src = faces[int]
}