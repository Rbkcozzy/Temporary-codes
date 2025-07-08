let angka = 1 
let batas = 100
console.log ('Ini adalah counter kelipatan 3\n')
for (angka ; angka <= batas; angka+=2) {
    if (angka % 3 === 0) {
        console.log (angka + ' adalah kelipatan 3')
    }
    else console.log (angka)
}

console.log('\n ')

angka = 1
console.log ('Ini adalah counter kelipatan 6\n')
for (angka; angka <= batas; angka+=5) {
    if (angka % 6 === 0) {
        console.log (angka + ' adalah kelipatan 6')
    }
    else {
        console.log (angka)
    }

}

console.log ('\n ')

angka = 1
console.log ('Ini adalah counter kelipatan 10\n')
for (angka; angka <= batas; angka+=9) {
    if (angka % 10 === 0) {
        console.log (angka + ' adalah kelipatan 10')
    }
    else {
        console.log (angka)
    }
}
