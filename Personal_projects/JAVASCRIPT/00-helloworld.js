const name = "Miguel";
const marca = "Gixxer"; 
let km = 6250;
let edad = 18;
let kmParaMantenimiento = km + 3000;
let galonesGastados = km / 150;
let precioGalon = 15000;
let totalgastado = galonesGastados * precioGalon;
console.log(`${name} tiene ${edad} años y tiene la moto de marca ${marca} con un kilometraje de ${km}`);
console.log (`Mi proximo mantenimiento será a los ${kmParaMantenimiento}`)
console.log (`En mis 6250 km me he gastado aproximadamente $${totalgastado} en gasolina`)
