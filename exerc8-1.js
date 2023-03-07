const read = require ('readline-sync');

let numero = read.question ("FALA UM NUMERO: ")

console.log(reverseNum(numero))

function reverseNum(num) {
	return (
    parseFloat(
      num
        .toString()
        .split('')
        .reverse()
        .join('')
    ) * Math.sign(num)
  )
}