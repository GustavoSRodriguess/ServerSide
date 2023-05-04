import mysql2 from "mysql2/promise"

async function conect(){
    if(global.connection && global.connection.state !== 'disconnected')
    return global.connection

    const mysql = mysql2
    const connection = await mysql.createConnection("mysql://root:@localhost:3306/serverside")
    console.log("conectado")
    global.connection = connection
    return connection
}

export default conect
