let goles = 0;
const botonGoles = document.getElementById("mi-boton");
botonGoles.onclick = function () {
    goles = goles + 1;
    console.log(`¡GOL DEL VERDE! Van ${goles} goles`);

    const tituloMarcador = document.getElementById("marcador");
    if (goles >= 3) {
        tituloMarcador.innerText = `¡GOLEADA EN EL ATANASIO! 🏟️ VAN ${goles}`;
        tituloMarcador.style.color = "green";
    } else {
        tituloMarcador.innerText = `Goles: ${goles}`;
        tituloMarcador.style.color = "black"; /*esto es para cambiar el color de algo*/
    }

   
}

const partidonacional = {
    golesVerde: 0,
    partidos: 0,
    estadio: "atancio girardot"
}
const botonpartidoNacional = document.getElementById("partidos");
botonpartidoNacional.onclick = function () {
    partidonacional.golesVerde = partidonacional.golesVerde + 1;
    partidonacional.partidos = partidonacional.partidos + 1;
    const match = document.getElementById("match");
    match.innerText = `Partido numero: ${partidonacional.partidos}`;
        console.log(`Otro partido mas Van ${partidonacional.partidos} partidos`)

}

// 1. Creamos el objeto con la info del partido (Goles, Partidos, Estadio)
/*const partidonacional = {
    golesVerde: 0,
    partidos: 0,
    estadio: "atancio girardot"
}

// 2. Buscamos el botón en el HTML usando su ID ("partidos")
const botonpartidoNacional = document.getElementById("partidos");

// 3. Le decimos qué hacer cuando alguien le de CLIC
botonpartidoNacional.onclick = function () {

    // 4. Sumamos 1 a los goles y 1 a los partidos dentro del objeto
    partidonacional.golesVerde = partidonacional.golesVerde + 1;
    partidonacional.partidos = partidonacional.partidos + 1;

    // 5. Buscamos el lugar en la pantalla donde queremos mostrar el texto (ID "match")
    const match = document.getElementById("match");

    // 6. USAMOS INNERTEXT: Aquí es donde JS cambia el texto que ve el usuario
    match.innerText = `Partido numero: ${partidonacional.partidos}`;

    // 7. Mandamos un mensaje a la consola para nosotros los programadores
    console.log(`Otro partido mas Van ${partidonacional.partidos} partidos`);
}*/