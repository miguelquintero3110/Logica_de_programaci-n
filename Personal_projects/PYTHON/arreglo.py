total_notas=[]   
while True:
     students= int(input("Ingrese cantidad de estudiantes "))
     if students <= 0:
       print("ERROR")
       continue
     else:
         break
print("Los estudiantes son", students)
while True:
    t_notes=int(input("Digite el total de notas "))
    if t_notes == 0:
        print("Tienen que ser más de 1 nota ")
    else:
        break
for e in range(students):
        print(f"Estudiante {e + 1}")
        notas_del_estudiante = []

        for i in range(t_notes):
            notes=float(input("Digite la nota del estudiante "))
            notas_del_estudiante.append(notes)  
        total_notas.append(notas_del_estudiante)

for n in range(students):
    notas_x1=total_notas[n]
    promedio = sum(notas_x1) / len(notas_x1)
    print(f"Estudiante {n+1} tiene las notas: {notas_x1} y su promedio es: {promedio}")