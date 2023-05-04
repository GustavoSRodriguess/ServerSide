const read = require ('readline-sync')

let param = read.question("duvidei falar um numero: ")

function palio(param){

    let numero = param

    function func2(){
        let result = numero * 2
        return console.log(result)
    } 
    return func2()
}

palio(param)