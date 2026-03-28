# opciones ver saldo retirar dinero y depositar y cuanto si hay fondos insufiecientes retiro exitosos nuevo saldo y msotrar el nuevo saldo#
saldo = 1000
interfaz=int(input("Escoja una opcion: 1. retirar dinero, 2. depositar dinero, 3. ver saldo "))
if interfaz== 1:
    ret= int(input(("Cuanto desea retirar ") ))
    if ret > saldo:
        print("Saldo insuficiente ")
    else:
        print("operacion exitosa")
        
 
elif interfaz == 2:
  dep= int(input("cuanto deseas depositar "))
  calculo1= saldo + dep
  print("Su saldo es ahora de ", calculo1)

elif interfaz == 3:
    print("Su saldo es ", saldo)

interfaz_2= int(input("Quiere escoger otra opcion: 1. retirar dinero, 2. depositar dinero, 3. ver saldo "))
if interfaz_2== 1:
    ret= int(input(("Cuanto desea retirar ") )) 
    if ret > saldo + dep:
        print("Saldo insuficiente ")
    else:
        print("operacion exitosa", "su saldo es de ", calculo1 - ret ) 
 
elif interfaz_2 == 2:
  dep= int(input("cuanto deseas depositar "))
  calculo1= saldo + dep
  print("Su saldo es ahora de ", calculo1)

elif interfaz_2 == 3:
    print("Su saldo es ", calculo1)


