// *********** Variables para guardar los inputs **********
let valor1 = document.getElementById("valor1");
let valor2 = document.getElementById("valor2");

// *********** Variables para guardar los inputs **********
let addButton = document.getElementById("add");
let subButton = document.getElementById("sub");
let mulButton = document.getElementById("mul");
let divButton = document.getElementById("div");

//console.log(valor1, valor2);

// ********* Funciones ************
const sum = (a, b) => a + b
const sub = (a, b) => a - b
const mul = (a, b) => a * b
const div = (a, b) => b == 0 ? window.alert("syntax error") : a/b ;

//*********** Eventos del sitio **********

addButton.addEventListener("click", sum )
subButton.addEventListener("click", sub)
mulButton.addEventListener("click", mul)
divButton.addEventListener("click", div)