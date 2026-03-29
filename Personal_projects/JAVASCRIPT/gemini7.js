const tiempos = ["6 am", "10 am", "6 pm", "7 pm", "9 pm"]
for (let i = 0; i < tiempos.length; i++) {
    if (tiempos[i] === "9 pm"){
        console.log(`¡Encontrada! Clase del día número ${i} a la hora de: ${tiempos[i]}`)/*ACA PARA UNA SOLA*/
    }
        /*console.log(`Clase del dia numero ${i} a la hora de: ${tiempos[i]}`); ACA ES PARA TODAS LAS FECHAS*/
}

const partes = ["espejos", "motor", "aceite", "kit", "bujia"];
for (let i = 0; i < partes.length; i++) {
    if (partes[i] === "bujia"){
        console.log (`se encontro la parte ${i} con el nombre de ${partes[i]} `)
    } else {
        console.log(`La parte ${partes[i]} no es la que busco`)
    }
}