import { novoNome, alterarTabela, matarBurro } from "./processo.js";
import dados from "readline-sync"


console.log("1- Adicionar Burro")
console.log("2- Alterar Burro")
console.log("3- Matar Burro")
let pergunta = dados.questionInt("Qual operacao vc quer fazer?: ")

switch(pergunta){
    case 1:{
        novoNome()
        break
    }
    case 2:{
        alterarTabela()
        break
    }
    case 3:{
        matarBurro()
        break
    }
}