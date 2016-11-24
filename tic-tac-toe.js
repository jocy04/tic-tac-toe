// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
  function makeShape1() {
     var circle = document.createElementNS(namespace, "circle")
     var canvas = document.getElementById("game-board")
     circle.setAttribute("cx", 120)
     circle.setAttribute("cy", 85)
     circle.setAttribute("r", 20)
     canvas.appendChild(circle)
  }

function makeShape2(){
  var circle = document.createElementNS(namespace, "circle")
  var canvas = document.getElementById("game-board")
  circle.setAttribute("cx", 175)
  circle.setAttribute("cy", 85)
  circle.setAttribute("r", 20)
  canvas.appendChild(circle)
}

function makeShape3(){
  var circle = document.createElementNS(namespace, "circle")
  var canvas = document.getElementById("game-board")
  circle.setAttribute("cx", 231)
  circle.setAttribute("cy", 85)
  circle.setAttribute("r", 20)
  canvas.appendChild(circle)
}

function makeShape4(){
  var circle = document.createElementNS(namespace, "circle")
  var canvas = document.getElementById("game-board")
  circle.setAttribute("cx", 120)
  circle.setAttribute("cy", 145)
  circle.setAttribute("r", 20)
  canvas.appendChild(circle)
}

function makeShape5(){
 var circle = document.createElementNS(namespace, "circle")
 var canvas = document.getElementById("game-board")
 circle.setAttribute("cx", 175)
 circle.setAttribute("cy", 146)
 circle.setAttribute("r", 20)
 canvas.appendChild(circle)
}

function makeShape6(){
  var circle = document.createElementNS(namespace, "circle")
  var canvas = document.getElementById("game-board")
  circle.setAttribute("cx", 230)
  circle.setAttribute("cy", 145)
  circle.setAttribute("r", 20)
  canvas.appendChild(circle)
}

function makeShape7(){
  var circle = document.createElementNS(namespace, "circle")
  var canvas = document.getElementById("game-board")
  circle.setAttribute("cx", 230)
  circle.setAttribute("cy", 205)
  circle.setAttribute("r", 20)
  canvas.appendChild(circle)
}

function makeShape8(){
  var circle = document.createElementNS(namespace, "circle")
  var canvas = document.getElementById("game-board")
  circle.setAttribute("cx", 120)
  circle.setAttribute("cy", 205)
  circle.setAttribute("r", 20)
  canvas.appendChild(circle)
}

function makeShape9(){
  var circle = document.createElementNS(namespace, "circle")
  var canvas = document.getElementById("game-board")
  circle.setAttribute("cx", 175)
  circle.setAttribute("cy", 205)
  circle.setAttribute("r",  20)
  canvas.appendChild(circle)
}
