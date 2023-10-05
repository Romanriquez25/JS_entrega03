let ele = document.querySelector(".ele1")
ele.style.display = "flex"
ele.style.justifyContent = "center"

function pintar() {
    ele.style.backgroundColor = "red"
}
ele.addEventListener("click", pintar);


//funcion modificada punto 2.2

ele.addEventListener("click", function () {
    ele.style.backgroundColor = "red"
});

// funcion modificada punto 2.3


function pintar(colorSelect){
    if(colorSelect === undefined)
        ele.style.backgroundColor = "green"
    else {
        ele.style.backgroundColor = colorSelect
    }

}

ele.addEventListener("click", function () {
    pintar()
}); // Pintar por defecto "Green"

ele.addEventListener("click", function () {
    pintar()
}); // Pintar con parametro en este caso amarillo("yellow")


