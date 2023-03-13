
let usuarios = [{
    nome: "João",
    habilidades: ["JavaScript", "ReactJS", "Redux"]
},
{
    nome: "Maria",
    habilidades: ["Java", "Ruby on Rails", "Laravel"]
}];

mostrar(usuarios)

function mostrar(usuarios){
    for(let i = 0; i < 2; i++){
        console.log("O usuario " + usuarios[i].nome + " possui as habilidades " + usuarios[i].habilidades)
    }
}

