let ti = 0

let c = 0

let hj = 0

let pv = 0

while (true) {

    const m = prompt("Deseja inserir os dados de uma nova pessoa? (sim/não)")

    if(m.toLowerCase() !== "sim"){ 
        
        break
    }

    const i = Number(prompt("Digite a idade da pessoa:"))
    const h = Number(prompt("Digite a altura da pessoa (em metros):"))
    const p = Number(prompt("Digite o peso da pessoa (em kg):"))

    ti = ti + i

    if (c === 1 || i < hj) {
        hj = h
    }

    if (c === 1 || i > pv) {
        pv = p
    }
}

const mi = c > 0 ? ti / c : 0

alert(`Altura da pessoa mais jovem: ${hj} m\nPeso da pessoa mais velha: ${pv} kg\nMédia de idade: ${mi.toFixed(2)} anos.`)
