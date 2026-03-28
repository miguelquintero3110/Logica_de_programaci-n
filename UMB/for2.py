ventas = [12000, 8000, 15000,4000, 22000, 7000, 18000]
num_ventas = [1, 2, 3, 4, 5, 6, 7]  

for i in range(len(ventas)):
    valor_venta = ventas[i]
    numero = num_ventas[i]
    if valor_venta <= 7000:
        clas = "baja"
    elif valor_venta <= 15000:
        clas = "media"
    else:
        clas = "alta"


