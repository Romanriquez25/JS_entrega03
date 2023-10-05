
var agregarColorA;
var agregarColorB;
var agregarColorC;

document.addEventListener('keydown', function(event) {    
    if (event.key === "A" || event.key === "a") {
        agregarColorA = "pink";
        key.style.backgroundColor = agregarColorA;
    } else if (event.key === "S" || event.key === "s") {
        agregarColorB = "orange";
        key.style.backgroundColor = agregarColorB;
    } else if (event.key === "D" || event.key === "d") {
        agregarColorC = "lightblue";
        key.style.backgroundColor = agregarColorC;
    }
    console.log(agregarColorA, agregarColorB, agregarColorC)
});

var key = document.getElementById("key");

key.style.height = "200px";
key.style.width = "200px";
key.style.backgroundColor = "white";
key.style.border = "1px solid black";


function crearElemento() {
    contenedor = document.querySelector(".contenedor__dos");
    elemento = document.createElement("div");
    elemento.textContent = "Hola";
    elemento.style.height = "200px";
    elemento.style.width = "200px";
    elemento.style.border = "1px solid black";

    elemento.style.backgroundColor = "purple";
    contenedor.appendChild(elemento);
}

function crearElemento2() {
    contenedor = document.querySelector(".contenedor__dos");
    elemento = document.createElement("div");
    elemento.textContent = "Hola";
    elemento.style.height = "200px";
    elemento.style.width = "200px";
    elemento.style.border = "1px solid black";

    elemento.style.backgroundColor = "grey";
    contenedor.appendChild(elemento);
}

function crearElement3() {
    contenedor = document.querySelector(".contenedor__dos");
    elemento = document.createElement("div");
    elemento.textContent = "Hola";
    elemento.style.height = "200px";
    elemento.style.width = "200px";
    elemento.style.border = "1px solid black";

    elemento.style.backgroundColor = "brown";
    contenedor.appendChild(elemento);
}



document.addEventListener("keydown", function(event) {
    if (event.key === "q" || event.key === "Q") {
        crearElemento();
    } else if (event.key === "w" || event.key === "W") {
        crearElemento2();
    } else if (event.key === "e" || event.key === "E") {
        crearElement3();
    }
});