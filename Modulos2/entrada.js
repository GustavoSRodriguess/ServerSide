const read = require ('readline-sync')

let nome = read.question("qual seu nome meu nobre?: ")
let salario = read.question("e o teu salario meu rei?: ")

module.exports = {nome, salario}