const read = require ('readline-sync');

let raio = read.question("qual o raio do circulo?: ")

console.log("qual operaçao vc deseja?")
let perg = read.question("area circ: A ou circinferencia: C: ")

switch(perg.toUpperCase()){

    case "A":{
        console.log(acirc(raio))
        break
    }

    case "C":{
        console.log(ccirc(raio))
        break
    }
}

function acirc (raio){
    let racrirc = 3.14*(raio*raio)

    return racrirc
}

function ccirc (raio){
    let rccric = 2*3.14*raio

    return rccric
}
