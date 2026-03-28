#definir el area de un cuadrado en función de uno de sus lados#
lado1=int(input("ingresa un numero"))
area=lado1*lado1
print("area del cuadrado= ", area)

multiplicador=float(input("Si quieres multiplicar el area por cualquier numero ingresalo " ))
multiplicacion=multiplicador*area
print("es esto marica", multiplicacion)


if multiplicacion > area:
    print("muy bien maquina asi tiene que ser mayor al area")
else:
    print("como lo hizo ")



