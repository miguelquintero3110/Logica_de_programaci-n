# opciones ver saldo retirar dinero y depositar y cuanto si hay fondos insufiecientes retiro exitosos nuevo saldo y msotrar el nuevo saldo#
saldo = 1000
while True:
    interfaz=int(input("Escoja una opcion: 1. retirar dinero, 2. depositar dinero, 3. ver saldo "))
    if interfaz== 1:
        ret= int(input(("Cuanto desea retirar ") ))
        calculo2 = saldo - ret
        if ret > saldo:
         print("Saldo insuficiente ")
        else:
            print("operacion exitosa")
            print("Su saldo es", calculo2)
        
 
    elif interfaz == 2:
        dep= int(input("cuanto deseas depositar "))
        calculo1= saldo + dep
        print("Su saldo es ahora de ", calculo1)

    elif interfaz == 3:
        print("Su saldo es ", saldo)


