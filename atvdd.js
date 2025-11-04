const prompt = require('prompt-sync')()
let idade = prompt("Digite sua idade: ")


if (idade >= 18){
  let mensagem = "Você é maior de idade!";  
  console.log(mensagem);
}else{
    let mensagem = "Você é menor de idade!";  
     console.log(mensagem);
}    