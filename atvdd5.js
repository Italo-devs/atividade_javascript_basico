const prompt = require('prompt-sync')()

let senha

do{
    senha = Number(prompt("Insira sua senha: "))
    if(senha != 999){
        console.log("Senha incorreta, tene novamente! ")
    }
}while(senha != 999){
    console.log("Acesso permitido!")
}