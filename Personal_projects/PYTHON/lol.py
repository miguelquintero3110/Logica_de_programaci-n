ventas = [12000, 8000, 15000, 4000, 22000, 7000, 18000]
num_ventas = [1, 2, 3, 4, 5, 6, 7]

# Variable para contar ventas altas
contador_altas = 0

# Usamos un ciclo que recorra las posiciones (0, 1, 2...)
for i in range(len(ventas)):
    valor_venta = ventas[i]
    numero = num_ventas[i]


    # Lógica de clasificación
    if valor_venta <= 7000:
        clasificacion = "Baja"
    elif valor_venta <= 15000:
        clasificacion = "Media"
    else:
        clasificacion = "Alta"
        contador_altas += 1 # Sumamos 1 si es alta

    print(f"Venta #{numero}: ${valor_venta} - Clasificación: {clasificacion}")


print(f"Total de ventas altas encontradas: {contador_altas}")