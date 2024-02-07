const leia = require('prompt-sync')();

let peso = leia("Digite seu peso: ");
let altura = leia("Digite sua altura: ");

let imc = (peso / (altura * altura)).toFixed(2);
console.log("Seu imc é " + imc);

if(imc < 18.49){
    console.log("Você está a baixo do peso")
} else if (imc > 18.5 && imc < 24.9){
    console.log("Seu peso está normal")
} else if (imc > 25 && imc < 29.9){
    console.log("Você está a cima do peso")
} else if (imc > 30 && imc < 34.9){
    console.log("Você está em obesidade grau um")
} else if (imc > 35 && imc < 39.9){
    console.log("Você está em obesidade grau dois")
} else {
    console.log("Você está em obesidade grau três")
}