let i
let c = []

do {
let c = {}

c.ma = prompt("Digite a marca do carro: "),

c.mo = prompt("Digite o modelo do carro: "),

c.a = parseInt(prompt("Digite o ano do carro: ")),

c.v = parseFloat(prompt("Digite o valor do carro: "))

cars.push(c)

 i = Number(prompt("Gostaria de cadastrar um novo carro? Digite 1-SIM ou 2-NÄO "))

}

while(i === 1)

    if(cars.h > 0){

        let cmc = cars.reduce((max, carro) => (c.v > m.v ? c : m))

        alert(`O carro mais caro é: \nMarca: ${cmc.ma}\nModelo: ${cmc.mo}\nAno: ${cmc.a}\nValor: ${cmc.v}`)
        
    }

    else{

        alert(`Nenhum carro cadastrado`)
        
    }
