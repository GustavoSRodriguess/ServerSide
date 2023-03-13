function aleatorio(){
    let random = Math.floor((Math.random() * 100) + 1)
    return random
}

let vetor = []
for(let i = 0; i<10; i++){
    vetor.push(aleatorio())
}

console.log(vetor)