//funções novas
const peso1 = 1.0
const peso2 = Number('2.05')

console.log("o peso 1 é de: " + peso1 + "   /  o peso 2 é de: " + peso2)
console.log("o peso 1 é inteiro?  " + Number.isInteger(peso1))//isinterger verifica se o número é inteiro
console.log("o peso 2 é inteiro?  " +Number.isInteger(peso2))//isinterger verifica se o número é inteiro

const avaliacao1 = 9.963
const avaliacao2 = 5.942

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total/ (peso1 + peso2)

console.log(media.toFixed(3))//tofixed escolhe a quantidade de casas decimais
console.log(media.toString())//converte o valor para string
console.log(media.toString(2))//converte o valor para binário
console.log(typeof media)//verifica o tipo do valor
console.log(typeof Number)