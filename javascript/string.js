//string
const escola = 'cod3r'

console.log(escola.charAt(4))//charat seleciona a letra
console.log(escola.charAt(3))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))// valor dele na tabela asci
console.log(escola.indexOf('3'))//indice de onde esta o valor 3 na palavra
console.log(escola.substring(1))//imprime a partir do indice 1
console.log(escola.substring(0, 3))//vai do indice 0 até o 3
console.log('escola'.concat(escola).concat("!"))
console.log(escola.replace(3, 'e'))//substitui
console.log('Ana,Maria,Pedro'.split(','))
console.log('Ana,Maria,Pedro'.split(/,/))