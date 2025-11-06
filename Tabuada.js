const prompt = require('prompt-sync')()

let numero = Number(prompt("Informe um número para ver sua tabuada: "))
let tabuada = ""
if(numero <= 0){
         console.log("Número inválido! ")
    }else{
console.log("SOMA")


for (let i = 1; i <= 10; i++) {
    tabuada += `${numero} + ${i} = ${numero + i}\n`
    
}
console.log("MULTIPLICAÇÃO")

for (let i = 1; i <= 10; i++) {
     tabuada += `${numero} x ${i} = ${numero * i}\n`
}

console.log("SUBITRAÇÃO")

for (let i = 1; i <= 10; i++) {
      tabuada += `${numero} - ${i} = ${numero - i}\n`
}

console.log("DIVISÃO")

for (let i = 1; i <= 10; i++) {
       tabuada += `${numero} ÷ ${i} = ${numero / i}\n`
       
}

console.log("\n Tabuada de ", numero)
console.log(tabuada)
}