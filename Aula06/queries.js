import conect from "./db.js"

export async function selectProduct(){
    const sql = "SELECT id_produto FROM produto"
    const conn = await conect()
    const produtos = await conn.query(sql, [])
    console.log(produtos[0])
}