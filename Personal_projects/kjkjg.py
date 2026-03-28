# Guardar número inicial
numero = float(input("INGRESA UN NUMERO "))

# Ciclo mientras el número sea mayor que 1
while numero > 1:
    numero = numero / 2  # División sucesiva
    print("Valor actual:", numero)
# Mensaje final
print("Ya se llegó a la condición: número menor o igual a 1")