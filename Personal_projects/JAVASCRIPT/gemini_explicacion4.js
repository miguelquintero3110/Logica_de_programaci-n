// 1. Creamos la "maquinita" (Función)
function calcularGastoGasolina(kmRecorridos) {

    // 2. Adentro hacemos la matemática
    let galones = kmRecorridos / 150;
    let costoTotal = galones * 15000;

    // 3. Devolvemos el resultado final
    return costoTotal;
}

// 4. Usamos la función pasándole tus 6250 km
let resultadoFinal = calcularGastoGasolina(300);

console.log(`Miguel, te has gastado en total: $${resultadoFinal} pesos.`);