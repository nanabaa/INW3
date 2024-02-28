const prompt = require('prompt-sync')();

function getUserInfo(){
   let peso = prompt("Digite seu peso: ")
   let altura = prompt("Digite sua altura: ")

   return{
        pesoUsuario: peso,
        alturaUsuario: altura
   }
}

function calcImc(pesoInformado=0,alturaInformada=0){
    return pesoInformado/alturaInformada**2
}

function main(){
    let userData = getUserInfo();
    let peso = userData.pesoUsuario
    let altura = userData.alturaUsuario
    let resultado = calcImc(peso,altura)

    if (resultado<18){
    console.log(`Seu IMC é ${resultado}, e você está abaixo do peso.`)}

    else if (resultado>18 && resultado<23.9){
    console.log(`Seu IMC é ${resultado}, e seu peso está normal.`)}

    else{
        console.log(`Seu IMC é ${resultado}, e você está acima do peso.`)
    }
}
main()

//altura informa com .//
