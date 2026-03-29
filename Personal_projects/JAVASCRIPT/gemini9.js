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


const miMoto = {
    marca: "suzuki",
    modelo: "gixxer 150 fi",
    kilometraje: 6250,
    mostrarTablero: function () {
        console.log(`la ${this.modelo} lleva ${this.kilometraje} km recorridos`)
    },
    rodar: function (kmNuevos){
        this.kilometraje += kmNuevos
        console.log(`rodaste ${kmNuevos} Ahora la moto tiene ${this.kilometraje} km`)
    }
}
miMoto.mostrarTablero()
miMoto.rodar(10)
miMoto.rodar(200)