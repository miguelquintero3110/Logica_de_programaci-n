let sparringTime = 60;
let sparringMeta = 70;
let plata = 150000;
// Aquí viene el "Si..."
if (sparringTime >= sparringMeta) {
    console.log("¡Excelente, Miguel! Cumpliste la meta de sparring.");
} else {
    console.log("Ah no, te faltaron minutos. ¡A darle más duro al saco!");
}
if (sparringTime >= 60 && plata >= 20000) {
    console.log(`Listo vaya al sparring pro`)
} else {
    console.log(`Paila perro no le alcanza`)
}
let kmActual = 6800;
let kmTaller = 6000;
let rango = kmTaller - kmActual;
if (kmActual >= kmTaller) {
    console.log(`Ya es hora de ir al taller`);
} else if (kmActual >= 5800) {
    console.log(`Ya no falta mucho para el taller, ya faltan ${rango} km `)
} else {
    console.log(`Aun falta mucho para el taller`)
} 