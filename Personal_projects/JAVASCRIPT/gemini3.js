guantes_viejos = false;
plata = 10000000000;
promocion = true;
promocionV = 130000
/*if (promocion || guantes) {
    console.log(`Vaya y los compra de una vez`)
} else if (plata >= promocionV) {
    console.log(`Inviertale que estan de promo`)
} else {
    console.log(`Todavia falta papi`)
}*/
if (guantes_viejos && plata >= promocionV && promocion) {
    console.log(`de una compre eso`)
} else{
    console.log(`Mejor ahorre un poquito mas`)
}
