const partes= ["espejos", "motor", "aceite", "kit"];
dondeEstaElMotor = partes.indexOf("motor")
console.log (partes[2])
partes.push("bujia");
console.log(partes)
console.log(partes.length);
console.log (dondeEstaElMotor)

/* aca i es variable para que el ciclo pueda parar inicia en 0 e i tiene que se menor al total para luego ir sumando en cada vuelta y parar*/
for (let i = 0; i < partes.length; i++) {
    console.log(`Elemento numero ${i}: ${partes[i]}`);
}