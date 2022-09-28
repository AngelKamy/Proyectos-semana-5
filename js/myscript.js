// *********** Variables para guardar los inputs **********
const valor1 = document.getElementById("val1");
const valor2 = document.getElementById("val2");
const resultado = document.getElementById("total");

// *********** Variables para guardar los inputs **********
const addButton = document.getElementById("add");
const subButton = document.getElementById("sub");
const mulButton = document.getElementById("mul");
const divButton = document.getElementById("div");

//console.log(valor1, valor2);

// ********* Funciones ************
const sum = (a, b) => a += b
const sub = (a, b) => a - b
const mul = (a, b) => a * b
const div = (a, b) => b == 0 ? window.alert("syntax error") : a/b ;


/* Convierte los inputs en 'number' */
// Este bloque no es de mi autoría
const fnAdd = () => {
    const x = parseInt(valor1.value);
    const y = parseInt(valor2.value);
    resultado.value = sum(x,y)
}

const fnSub = () => {
    resultado.value = sub(valor1.value, valor2.value)
}

const fnMul = () => {
    resultado.value = mul(valor1.value, valor2.value)
}

const fnDiv = () => {
    resultado.value = div(valor1.value, valor2.value)
}

//*********** Eventos del sitio **********

addButton.addEventListener("click", fnAdd)
subButton.addEventListener("click", fnSub)
mulButton.addEventListener("click", fnMul)
divButton.addEventListener("click", fnDiv)