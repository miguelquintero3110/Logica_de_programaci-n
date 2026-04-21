function promedioGoles (goles, partidos) {
    let partidosJugados =partidos;
    let golesAnotados = goles;
    let matematica = golesAnotados / partidosJugados;
    if (matematica > 0.7) {
        return `¡Goleador! Su promedio es ${matematica}`;
    } else {
        return `Le falta puntería. Su promedio es ${matematica}`;
    }
    
    
}
let resultado = promedioGoles(8,15);
console.log(`El promedio de gol de este jugador es ${resultado}`)
