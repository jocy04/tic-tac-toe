// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
  function makeShape() {
    var circle = document.createElementNS(namespace, "circle")
    var canvas = document.getElementById("game-board")
    circle.setAttribute("cx", 120)
    circle.setAttribute("cy", 85)
    circle.setAttribute("r", 20)
    canvas.appendChild(circle)
  }
