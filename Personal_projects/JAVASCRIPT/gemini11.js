// 1. Buscamos el botón por su ID
const elBoton = document.getElementById("mi-boton");

// 2. Le asignamos la función que se activa con el clic
elBoton.onclick = function () {
    console.log("¡Click detectado!");
};

let goles = 0;
const botonGoles = document.getElementById("mi-boton");
botonGoles.onclick = function(){
    goles = goles + 1;
    console.log(`¡GOL DEL VERDE! Van ${goles} goles`);

}