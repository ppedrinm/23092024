let p = {}

p.n = prompt("Digite seu nome: "),

p.i = parseInt(prompt("Digite sua idade: ")),

p.l = prompt("Digite sua localização: ")

console.log(p)

let per = parseInt(prompt("Gostaria de atualizar seus dados? 1-SIM e 2-NÃO"))

if(per == 1){

    let atud = parseInt(prompt("O que você gostaria de atualizar? 1-IDADE e 2-LOCALIZAÇÃO"))

    if(atud = 1){

    p.i = parseInt(prompt("Digite sua idade: "))

    console.log(p.i)

    }

    else if(atud = 2){

    p.l = prompt("Digite sua localização: ")

    console.log(p.l)

    }

    console.log(p)

}

else{

    alert("Programa encerrado!")

}






