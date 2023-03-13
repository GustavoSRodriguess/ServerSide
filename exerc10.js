const read = require ('readline-sync')

let hora = read.question("fala as horas: ")
let min = read.question("agora os minutos: ")

let A = " A.M"
let P = " P.M"

sexo()

function convert(hor, minu){
    if(hor > 12){
        let novaHor = hor-12
        return novaHor + ":" + minu + P
    }else{
        return hor + ":" + minu + A
    }
}

function sexo (){
    console.log(convert(hora,min))
}