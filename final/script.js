let p

let l

let lf = -1000

let igf = 0

p = parseInt(prompt("Quantas pessoas estão previstas de ir:"))

for (let i = 150; i > 0; i -= 10) {
    l = (i * p) - 1000

    if(l > lf) {
        lf = l
        igf = i
    }

    p = p + 50
}

alert("O maior lucro possivel será de R$" + lf + " vendendo o ingresso a R$" + igf)
