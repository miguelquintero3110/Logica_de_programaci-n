let totalTime = 120;
let sacoTime = totalTime * 0.25
let peraTime = totalTime * 0.15
let sparringTime = totalTime * 0.60
let sparrtingMeta = totalTime *0.70
let Logrado = sparrtingMeta < sparringTime
console.log (`Entrené saco por ${sacoTime} min, pera por ${peraTime} min y sparring por ${sparringTime} min`)
console.log (`si entrene 72 minutos de sparring, entonces cumpli la meta ? ${Logrado}`)