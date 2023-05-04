const read = require ('readline-sync')

function contar(str, letra){
    let cont = 0
    
    for(let i = 0; i<str.length; i++){
        if(str[i] == letra){
            cont++
        }
    }
    return cont
}

let str = read.question("fala uma palavra ai: ")
let letra = read.question("agora fala uma letra: ")
const result = contar(str, letra)

console.log(result)