const read = require ('readline-sync');

let numero = read.question ("FALA UM NUMERO: ")

console.log("o numero " + numero + " ao contrario e " + inverso(numero))

function inverso (num){
    num = num + ""

    return num.split('').reverse().join('')

}