function ritmoSparring (golpes, minutos){
    let min = minutos;
    let golpesdados = golpes;
    let ritmo = golpesdados/ min;
    if (ritmo > 50) {
        return `¡Qué velocidad! Metiste ${ritmo} por ${min} minutos`
    } else {
        return `A entrenar más fuerte, solo metiste ${ritmo} por ${min} minutos`
    }
}
let total = ritmoSparring(121,2)
console.log (total)