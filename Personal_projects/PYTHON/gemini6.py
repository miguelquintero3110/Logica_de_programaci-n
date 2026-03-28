total_notas = []
total_promedios = []
def calcular_promedio(nota1, nota2, nota3):
    total_notas = nota1 + nota2 + nota3
    promedio = total_notas / 3
    return promedio
while True:
    students = int(input("Ingrese cantidad de estudiantes "))
    if students <= 0:
       print("ERROR")
       continue
    else:
         break

for e in range(students):
    print(f"Estudiante {e + 1}")
    notesT=[]
    for i in range(3):
        notes=float(input("Digite las notas del estudiante "))
        notesT.append(notes)
        total_notas.append(notesT)


    resultado_notas = calcular_promedio(notesT[0], notesT[1], notesT[2])
    print(f"este es el promedio: {resultado_notas}")
    if resultado_notas >= 3.0:
        print("paso chino, buena")
    else:      
        print("no paso chino, perdió")
    total_promedios.append(resultado_notas)
print(f"El promedio mas alto es: {max(total_promedios)} y el mas bajo es: {min(total_promedios)}")

                