valor = int(input("Cual es el valor de la cuenta "))
propina = int(input("Cual es el porcentaje de propina que quieres dejar "))
propina_2 = propina/100
valor_propina = valor * propina_2
valor_total = valor_propina + valor
print ("Este es el valor de la propina que quieres dejar", valor_propina)
print("Este es el valor total de la cuenta", valor_total)
