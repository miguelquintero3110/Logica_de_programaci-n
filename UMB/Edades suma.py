edad= int(input("Ingresa un dato "))
if edad <= 10:
    print("Eres un niño")
elif edad <18 and edad>10:
    print("Eres un adolocente")
elif edad >18 and edad<=60:
    print("Eres un adulto")
else: print("eres un anciano")