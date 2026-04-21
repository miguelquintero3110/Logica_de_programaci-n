const resultados = ["win", "lose", "win", "draw"];

const soloGanados = resultados.filter(partido => partido === "win");

console.log(soloGanados); // ["win", "win"]


const kilometros = [10, 50, 100];

const enMetros = kilometros.map(km => km * 1000);

console.log(enMetros); // [10000, 50000, 100000]

/* function(partido) {
    return partido === "win";  ESTO ES IGUAL A ESTO: partido => partido === "win"
} */

let tiemposRounds = [3, 2, 3, 1, 3]
let solo3 = tiemposRounds.filter(minutos => minutos === 3 );
let enSeg = tiemposRounds.map(min => min * 60)
console.log(`los minutos son ${solo3} y pasado a segundos ${enSeg}`)

/*const miMoto = {              // <--- El OBJETO
    modelo: "Gixxer",         // <--- La PROPIEDAD
    rodar: function(km) {     // <--- El MÉTODO (y 'km' es el PARÁMETRO)
        this.kilometraje += km; // <--- La LÓGICA (lo que hace)
    }
}*/