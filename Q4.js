//LUIDYMOURA

const prompt = require('prompt-sync')();

function limiteContagem(limite){
    let arrayRes = [];

    for(let i = 1; i <= limite; i++){

        if(i % 5 === 0 && i % 9 !== 0){
            arrayRes.push("Luidy");
        }else if(i % 5 !== 0 && i % 9 === 0 ){
            arrayRes.push("Moura");
        }else if(i % 5 === 0 && i % 9 === 0){
            arrayRes.push("LuidyMoura")
        }else{
            arrayRes.push(i);
        }
    }

    return arrayRes;
}

let limite = prompt("Digite o valor limite: ");
limite = parseInt(limite)

const resultado = limiteContagem(limite);

console.log(`Saida: \n${resultado}.`);