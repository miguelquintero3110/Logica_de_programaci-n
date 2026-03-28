# Listas para guardar la información final
todas_las_notas = [] 

while True:
    students = int(input("Ingrese cantidad de estudiantes: "))
    
    if students <= 0:
        print("ERROR: La cantidad debe ser mayor a 0")
        continue 
    else:
        # Si el dato está bien, salimos del escudo de seguridad
        break 

# Este ciclo se repite por cada estudiante (1, 2, 3...)
for e in range(students):
    print(f"\n--- CONFIGURACIÓN ESTUDIANTE {e + 1} ---")
    
    # Escudo para la cantidad de notas de ESTE estudiante
    while True:
        n_notes = int(input(f"¿Cuántas notas tiene el Estudiante {e + 1}?: "))
        if n_notes <= 0:
            print("Error: Tienen que ser más de 0 notas.")
        else: 
            break 

    notas_del_estudiante = [] # Bolsa temporal para este alumno solo
    
    # Ciclo para pedir las notas reales
    for i in range(n_notes):
        nota = float(input(f"Ingrese la nota {i + 1}: "))
        notas_del_estudiante.append(nota)
    
    # Guardamos la lista de este alumno en nuestra "gran lista"
    todas_las_notas.append(notas_del_estudiante)

# --- RESULTADO FINAL ---
print("\n" + "="*30)
print("REPORTE FINAL DE LA UMB")
print("="*30)

for idx, lista in enumerate(todas_las_notas):
    promedio = sum(lista) / len(lista)
    print(f"Estudiante {idx + 1}: Notas {lista} | Promedio: {promedio:.2f}")