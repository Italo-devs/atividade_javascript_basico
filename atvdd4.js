const prompt = require('prompt-sync')()
let numero = Number (prompt("Informe um número: "))

while(numero !== 0){
    console.log("Seu número é: ", numero)
    numero = Number (prompt("Informe outro número: "))
}