convocados=[]
def verificar_idolo(players):
    if players == "morelos":
        print("ESE ES EL MEJOR")

for c in range(3):
    players=input("diga 3 jugadores que si o si van convocados ")
    convocados.append(players)
    verificar_idolo(players)

player2 = input("Dime un suplente ") 
convocados.append(player2)
verificar_idolo(player2)

print("Esta es tu lista: ", convocados)

