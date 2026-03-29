const lastMachts = ["win", "lose", "lose"]
for (let i = 0; i < lastMachts.length; i++){
    if (lastMachts[i] === "win"){
        console.log(`Muy bien muchachos se gano el partido numero ${i+1}`)
    } else {
        console.log(`No muchachos se perdio el partido ${i+1} hay que meterle mas huevos`)
    }
}