
valor_rep=[]
nombre_rep=[]
can=int(input("Cuantos son los repuestos que necesita "))
for r in range(can):
    name=input("Ingrese el nombre del repuesto deseado ")
    nombre_rep.append(name)
    #forma 1 con el segundo for p. forma 2 quitar el for y cambiar 
    #la variable p por r
for p in range (r+1):
        price=int(input(f"Cual es el precio de el repuesto {p+1} "))
        valor_rep.append(price)
valor_t=sum(valor_rep)
print (f"Estos son los valores {valor_rep} y su total a pagar es {valor_t}")
print (f"Los objetos llevados son {nombre_rep}")
print (f"El repuesto mas caro vale {max(valor_rep)} y el mas barato es {min(valor_rep)}")