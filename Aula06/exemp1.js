let intervalo = setInterval(verificaAtualiza, 50)
function verificaAtualiza(){
    console.log("msg alatoria")
}

function interrompeVerificacao(){
    clearInterval(intervalo)
}

console.log(interrompeVerificacao)