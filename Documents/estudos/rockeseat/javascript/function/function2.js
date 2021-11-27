
//Funções <-- explicar, repetir

//argumentos e parâmetros

//function expressiva/anonymous
//parâmetros
//esses argumentos, na função são parâmetros
let total = 0
const sum = function(number1, number2) {
   let total = number1 + number2
   return total
}
 
let number1 = 34
let number2 = 25
//sum(2, 3) // <--argumentos (2, 3)
//console.log(`O número 1 é ${number1}`)
//console.log(`O número 2 é ${number2}`)
console.log(`A soma é ${sum(number1, number2)}`)
console.log(total)
