const miPerfilBoxeo = {
    nombre: "Miguel",
    peso: "60 kg",
    estilo: "estilista",
    sparringsCompletados: 20,
    lanzarJab: function(){
        console.log(`${this.nombre} lanzo un jab perfecto`)
    }
}
console.log(miPerfilBoxeo.estilo, miPerfilBoxeo.nombre)
miPerfilBoxeo.lanzarJab()
/*miPerfilBoxeo.sparringsCompletados = 21; ESTO ES PARA SUMARLE A COSAS O ASI miPerfilBoxeo.sparringsCompletados += 1;*/

const miBoxeo = {
    sparringsCompletados2: 20,
    registrarSesion : function(cantidad){
        this.sparringsCompletados2 += cantidad
        console.log(`¡Buena sesión! Sumaste ${cantidad} peleas. Total: ${this.sparringsCompletados2}`)
    }
}
miBoxeo.registrarSesion(10)


const miprogeso = {
    peleasGanadas: 15,
    evaluarNivel: function () {
        if (this.peleasGanadas > 10) {
            console.log(`¡Nivel Pro! Estás para grandes cosas`)
        } else {
            console.log(`Sigue entrenando, falta lona`)
        }
    }
}
miprogeso.evaluarNivel()

const miMoto = {
    marca: "suzuki",
    modelo: "gixxer 150 fi",
    kilometraje: 6250,
    mostrarTablero: function () {
        console.log(`la ${this.modelo} lleva ${this.kilometraje} km recorridos`)
    },
    rodar: function (){
        this.kilometraje += 100
        console.log(`Ahora la moto tiene ${this.kilometraje} km`)
    }

    /* chequearAceite: function() {
        if (this.kilometraje > 6000) {
            console.log("¡Ush! Toca cambiar el aceite ya.");
        } else {
            console.log("La moto está melosky.");
        } ESTO SIRVE PARA AVISAR ALGO CON UN IF 

    /*rodar: function (kmNuevos) {
        this.kilometraje += kmNuevos
        console.log(`rodaste ${kmNuevos} Ahora la moto tiene ${this.kilometraje} km`)
    } ESTE ES PARA RODAR LO QUE YO QUIERA Y SE SUME DEPENDIENDO EL NUMERO PUESTO */
}

miMoto.mostrarTablero()
miMoto.rodar()
miMoto.rodar()