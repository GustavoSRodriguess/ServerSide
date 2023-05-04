const read = require('readline-sync')

let chocolatehmm = read.question("quanto chocolates vc comrpo? ")
let conhecidos = read.question("quanto conhecidos vc tem? ")

function calchoc(chocolatehmm, conhecidos){
    let resultado = parseInt(chocolatehmm)/parseInt(conhecidos)
    return resultado
}

try{
    let result = calchoc(chocolatehmm,conhecidos)

    const chocFaltando = chocolatehmm%conhecidos

    if(chocFaltando === 0){
        console.log("a divisão foi feita perfeitamente cada amigo recebe: " + result + " chocolates")
    }else{
        const chocNecessario = conhecidos - chocFaltando
        console.log("ainda faltam", chocNecessario, "chocolates")
    }
}catch(error){
    console.log(error.message)
}