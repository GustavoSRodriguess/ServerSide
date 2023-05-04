import conect from "./bd.js"
import dados from "readline-sync"

let id = dados.questionInt("Qual o seu ID?: ")

export async function novoNome(){
    const con = await conect()

    let nome = dados.question("qual o seu nome?: ")
    let burro = dados.questionInt("qual seu nivel de burro?: ")
    const sql ='INSERT into CRUDburro (nome, lvl_burro) values (?,?)'
    const values = [nome, burro] 
    return await con.query(sql, values)
    
}

export async function alterarTabela(){
    const con = await conect()

    console.log("1- Alterar nome")
    console.log("2- Alterar nivel de burro")
    console.log("3- Alterar os dois")

    let pergunta = dados.questionInt("qual operacao vc quer fazer?: ")

    switch(pergunta){
        case 1:{

            let nome2 = dados.question("para qual nome vc quer altera?: ")
            const sql = 'UPDATE CRUDburro SET nome = ? WHERE id = ?'
            const values = [nome2, id] 
            return await con.query(sql, values)
            
        }
        case 2:{

            let lvlBurro = dados.questionInt("Qual seu nivel atual de burro?: ")
            const sql = 'UPDATE CRUDburro SET lvl_burro = ? WHERE id = ?'
            const values = [lvlBurro, id] 
            return await con.query(sql, values)
            
        }
        case 3:{
            let nome2 = dados.question("para qual nome vc quer altera?: ")
            let lvlBurro = dados.questionInt("Qual seu nivel atual de burro?: ")
            const sql = 'UPDATE CRUDburro SET nome = ?, lvl_burro WHERE id = ?'
            const values = [nome2,lvlBurro, id] 
            return await con.query(sql, values)
        }
       
        break
    }
    
    
}

export async function matarBurro(){
    const con = await conect()

    console.log("Burro morto")
    const sql = 'DELETE FROM CRUDburro WHERE id = ?'
    const values = [id] 
    return await con.query(sql, values)

}
