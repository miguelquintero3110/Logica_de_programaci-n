
frutas = ["Manzanas", "Naranjas", "Plátanos", "Uvas"]
verduras = ["Zanahorias", "Tomates", "Lechugas", "Papas"]
lacteos = ["Leche", "Yogur", "Queso", "Mantequilla"]
carnes = ["Pollo", "Res", "Cerdo", "Pescado"]
panaderia =  ["Pan", "Croissants", "Galletas", "Pasteles"]
granos_cereales = ["Arroz", "Lentejas", "Avena", "Pasta"]
bebidas = ["Agua", "Jugo", "Refrescos", "Café"]
snacks = ["Papas fritas", "Frutos secos", "Chocolates", "Galletas"]
Congelados = ["Verduras congeladas", "Helados", "Pizzas"],
Productos_enlatados = ["Sopa enlatada", "Frutas enlatadas", "Atún enlatado"]
Salsas_condimentos = ["Ketchup", "Mayonesa", "Aceite de oliva", "Especias"]
Productos_limpieza = ["Detergente", "Jabón", "Limpiador multiusos"]
Cuidado_personal = ["Champú", "Jabón", "Crema hidratante", "Pasta de dientes"]

super_mercado = [[frutas],[verduras],[lacteos],[carnes],[panaderia],[granos_cereales],[bebidas],[snacks],[Congelados],[Productos_enlatados],[Salsas_condimentos],[Productos_limpieza],[Cuidado_personal]]
filas = len(super_mercado)
colum = len(super_mercado[0])
print(super_mercado[1][0])
print("numero de filas es: ", filas)
print("numero de columnas es: ", colum)
for i in range(filas):
    for a in range(colum):
        print(super_mercado[i][a])