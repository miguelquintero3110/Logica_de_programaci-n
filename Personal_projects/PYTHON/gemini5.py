convocados=[]

def verificar_idolo(players):
    if players == "morelos":
        return "ESE ES EL MEJOR"
    else:
        return "Jugador común"


for c in range(3):
    players=input("diga 3 jugadores que si o si van convocados ")
    frase_fina = verificar_idolo(players)
    print("el sistema dice: ", frase_fina)
    convocados.append(players)
    verificar_idolo(players)


player2 = input("Dime un suplente ") 
convocados.append(player2)
verificar_idolo(player2)

print("Esta es tu lista: ", convocados)
