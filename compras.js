const prompt = require('prompt-sync')()

let compras = [
  { nome: "Arroz", preco: 20 },
  { nome: "Feijão", preco: 10 },
  { nome: "Óleo", preco: 8 },
  { nome: "Leite", preco: 6 },
  { nome: "Açúcar", preco: 5 }
]

let total = 0
let maisCaro = compras[0]

for (let i = 0; i < compras.length; i++) {
  total += compras[i].preco

  if (compras[i].preco > maisCaro.preco) {
    maisCaro = compras[i]
  }
}

console.log("Total de compras : R$" + total)
console.log("Item mais caro: " + maisCaro.nome + " R$" + maisCaro.preco + "")

if (total > 100) {
  console.log("Acima do orçamento")
} else {
  console.log("Dentro do orçamento")
}