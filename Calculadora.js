const prompt = require('prompt-sync')()

console.log("=======Menu de opções======= ")
console.log("1 - Somar")
console.log("2 - Subtrair")
console.log("3 - Multiplicar")
console.log("4 - Dividir")

let op = Number(prompt("Escolha uma opção de 1 a 4: "))
let a = parseFloat(prompt("Informe o primeiro número: "))
let b = parseFloat(prompt("Informe o segundo número: "))

let resultado

switch (op) {
  case 1:
    resultado = a + b
    console.log("Resultado da soma: " + resultado)
    break
  case 2:
    resultado = a - b
    console.log("Resultado da subtração: " + resultado)
    break
  case 3:
    resultado = a * b
    console.log("Resultado da multiplicação: " + resultado)
    break
  case 4:
      resultado = a / b
      console.log("Resultado da divisão: " + resultado)
    break
  default:
    console.log("Opção inválida. Escolha um número de 1 a 4.")
}
