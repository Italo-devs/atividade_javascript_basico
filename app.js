const prompt = require('prompt-sync')()

let idade = prompt("Digite sua idade: ") // Solicita ao usuário que digite sua idade

if (idade >= 18){ // Verifica se a idade é maior ou menor quem 18 
  let mensagem = "Você é maior de idade!"
  console.log(mensagem); // Exibe a mensagem no console
}else{ // Caso a idade seja menor que 18
    let mensagem = "Você é menor de idade!" 
     console.log(mensagem) // Exibe a mensagem no console
}    






let num = Number (prompt("Informe um número de 1 a 7: "))// Solicita um número de 1 a 7 e converte para número
 

switch(num) { 
    case 1: // Se o número for 1
        console.log("Domingo")// Exibe "Domingo"
        break 
    case 2: // Se o número for 2
        console.log("Segunda-Feira") // Exibe "Segunda-Feira"
        break
    case 3: // Se o número for 3
        console.log("Terça-Feira") // Exibe "Terça-Feira"
        break
    case 4: // Se o número for 4
    console.log("Quarta-Feira") // Exibe "Quarta-Feira"
        break
    case 5: // Se o número for 5
    console.log("Quinta-Feira") // Exibe "Quinta-Feira"
        break
    case 6:  // Se o número for 6
    console.log("Sexta-Feira") // Exibe "Sexta-Feira"
        break
    case 7:  // Se o número for 7
    console.log("Sabado") // Exibe "Sabado"
        break
        default: // Caso o número não esteja entre 1 e 7, não faz nada
}





for(let i = 1; i < 10; i++){ // Vai rodar de 1 até 9
    console.log(i) // Exibe o valor de i
}






let numero = Number (prompt("Informe um número: ")) // Informar o número 

while(numero !== 0){ // Enquanto o número for diferente de 0
    console.log("Seu número é: ", numero) // Exibe o número digitado
    numero = Number (prompt("Informe outro número: ")) // Solicita outro número
}







let senha // Variável senha

do{ 
    senha = Number(prompt("Insira sua senha: ")) // Solicita a senha e converte para número
    if(senha != 999){ // Verifica se a senha está incorreta
        console.log("Senha incorreta, tene novamente! ") // Exibe mensagem de Senha incorreta
    }
}while(senha != 999){ // Repete enquanto a senha for diferente de 999
    console.log("Acesso permitido!") // Exibe mensagem de acesso permitido!
}