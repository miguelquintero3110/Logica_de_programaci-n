velocidades=[]
hubo_exceso =False
def velocidad_alta(vel1):
    if vel1> 30:
        print("OJO ESTO NO ES SEGURO")  
for i in range (3):
    vel1=int(input("Digite la velocidad que tendria en una calle escolar"))
    velocidades.append(vel1)
    velocidad_alta(vel1)
print(f"Estas son las velocidades {velocidades}")

    