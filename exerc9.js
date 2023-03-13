const read = require ('readline-sync');

let palavra = read.question("fala uma palavra: ")

if (palin(palavra) == palavra) {
    console.log("a palavra " + palavra + " e um palindromo")
}else{
    console.log("a palavra nao e um palindromo")
}

function palin(pal){
    return(pal
        .split('')
        .reverse()
        .join('')
        )
}