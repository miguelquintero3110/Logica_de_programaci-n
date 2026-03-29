const resultados = ["win", "lose", "win", "draw"];

const soloGanados = resultados.filter(partido => partido === "win");

console.log(soloGanados); // ["win", "win"]


const kilometros = [10, 50, 100];

const enMetros = kilometros.map(km => km * 1000);

console.log(enMetros); // [10000, 50000, 100000]