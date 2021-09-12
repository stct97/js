/**
 * Array of strings with posibles faces
 */
const faces = ["img/1.png","img/2.png","img/3.png","img/4.png","img/5.png","img/6.png"]

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