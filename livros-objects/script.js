let l1 = {}

l1.n = prompt("Digite o nome do livro: "),
l1.at = prompt("Digite o nome do autor: "),
l1.a = parseInt(prompt("Digite o ano de publicação: "))

let l2 = {}

l2.n = prompt("Digite o nome do livro: "),
l2.at = prompt("Digite o nome do autor: "),
l2.a = parseInt(prompt("Digite o ano de publicação: "))

let lA

if(l1.a < l2.a){

    lA = l1

    console.log(lA)

}

else if(l1.a > l2.a){

    lA = l2

    console.log(lA)

}

if(l1.n == "estudando programação"){

    console.log("SIM")

}

else if(l1.n != "estudando programação"){

    console.log("NÃO")

}

if(l2.n == "estudando programação"){

    console.log("SIM")

}

else if(l2.n != "estudando programação"){

    console.log("NÃO")

}

if(l1.at == l2.at){

    console.log("Os dois livros são do mesmo autor!")

}

else if(l1.at != l2.at){

    console.log("Os dois livros não são do mesmo autor!")

}

console.log(l1.at)

console.log(l2.at)


