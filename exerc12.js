const read = require ('readline-sync')

let vetor = []

let resp = read.question("quantos numeros vc qr inserir? (3 a 6): ")

switch (resp){
    case '3':{
        for(let i = 1; i<4; i++){
        num = read.question("insira o "  + i + " numero: ")
        vetor[vetor.length] = num
        }
        let respos = vetor[0] * vetor[1] * vetor[2] * vetor[2]
        console.log("a resposta e " + respos) 
        break
    }
    case '4':{
        for(let i = 1; i<5; i++){
        num = read.question("insira o "  + i + " numero: ")
        vetor[vetor.length] = num
        }
        let respos = vetor[0] * vetor[1] * vetor[2] * vetor[3] * vetor[3]
        console.log("a resposta e " + respos) 
        break
    }
    case '5':{
        for(let i = 1; i<6; i++){
        num = read.question("insira o "  + i + " numero: ")
        vetor[vetor.length] = num
        }
        let respos = vetor[0] * vetor[1] * vetor[2] * vetor[3]* vetor[4]* vetor[4]
        console.log("a resposta e " + respos) 
        break
    }
    case '6':{
        for(let i = 1; i<7; i++){
        num = read.question("insira o "  + i + " numero: ")
        vetor[vetor.length] = num
        }
        let respos = vetor[0] * vetor[1] * vetor[2] * vetor[3]* vetor[4]* vetor[5] * vetor[5]
        console.log("a resposta e " + respos) 
        break
    }
    
}