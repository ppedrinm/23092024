let nai

let n 

let naif

let i = 0

let m = Number(prompt("Quantas cartas você quer tirar do baralho"))
while(i < m){
    nai = parseInt(Math.random() * 4 + 1)
    switch (nai) {
        case 1:
            naif = "Copas"
            break;
    
        case 2:
            naif = "Ouro"
            break;

        case 3:
            naif = "Espadas"
            break;

        case 4:
            naif = "Paus"
            break;
           
        default:
            break;
    }
    n = parseInt(Math.random() * 10 + 1)

    console.log("A sua carta é um "+ n + " de " + naif)

    i++
}