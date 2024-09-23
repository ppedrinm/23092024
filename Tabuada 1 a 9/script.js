let n = 1

let i = 0

let m
    
while (i<=10) {

    while (n<10) {
        m = n * i
        console.log(n + "x" + i + "=" + m)
        n++
    }
    i++
    n = 1
}