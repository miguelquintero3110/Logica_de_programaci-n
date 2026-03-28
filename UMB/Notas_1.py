cantidad_notas=[]
cantidad_estudiantes=[]
valor_notas=[]

while True:
     students= int(input("Ingrese cantidad de estudiantes "))
     cantidad_estudiantes.append(students) 
     if students <= 0:
       print("ERROR")
       continue
     else:
         break
for e in range(students):
 print(f"cantidad de estudiantes {e+1} ")
 while True:
    n_notes=int(input("Ingrese la cantidad de notas de los estudiantes "))
    if n_notes <=0:
        print("Tienen que ser más de 1 nota ")
        cantidad_notas.append(n_notes)
        continue
    else:
       break
    
for i in range(n_notes):
    notes=float(input(f"Cuales son las notas del estudiante {e+1} ? "))
    valor_notas.append(notes)
print(valor_notas)
                
                

                
        
