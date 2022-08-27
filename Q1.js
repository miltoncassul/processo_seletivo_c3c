//Classificação dos triangulos

const prompt = require('prompt-sync')();
console.log("Digite valores do lado de triangulo")
let ladoA = prompt("Lado A:");
let ladoB = prompt("Lado B:");
let ladoC = prompt("Lado C:");

ladoA = parseFloat(ladoA);
ladoB = parseFloat(ladoB);
ladoC = parseFloat(ladoC);

const lados = [ladoA, ladoB, ladoC];

var checkLadosIguais= [];

const res = lados.filter(function(currentValue, index, lados) {
    if(lados.indexOf(currentValue) !== index) {
        checkLadosIguais.push(currentValue);
    }
    return lados.indexOf(currentValue) == index;
})

if(res.length === 1){
  console.log("Triangulo Equilatero");
}else if(res.length == 2){
  console.log("Triangulo Isoceles");
}else{
  console.log("Triangulo Escaleno");
}