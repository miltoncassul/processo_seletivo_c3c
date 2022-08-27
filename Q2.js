// EQUAÇÃO DO 2ª USANDO FORMULA DE BHASKARA
// Uma das vantagens da programação é a automatização de tarefas que 
// não gostamos de realizar. Dito isto, elabore um método em JS cujo 
// objetivo é resolver a fórmula de Bhaskara.
// Para isso, sua função deve receber três parâmetros, 
// “ax2”, “bx” e “c”, de tal modo que na equação: 3x2 - 5x + 12 
// os valores seriam respectivamente: 3, -5, 12.

const prompt = require('prompt-sync')();

function resolveBaskara(ax, bx, c){

    const Delta = Math.pow(bx, 2) - 4 * ax * c;
    const raizDelta = Math.sqrt(Delta);
    let arrayRaizes = []

    if(raizDelta >= 0){ //Checa se o delta é negativo
        let raiz1 = ((-bx) + raizDelta) / (2 * ax);
        arrayRaizes.push(raiz1);

        if(raizDelta > 0){
            let raiz2 = ((-bx) - raizDelta) / (2 * ax);
            arrayRaizes.push(raiz2);
        }
        return arrayRaizes;
    }
    return "Delta é negativo";
}

console.log("Digite as coeficientes da equação");
let a = prompt("valor de a: ");
let b = prompt("valor de b: ");
let c = prompt("valor de c: ");

a = parseFloat(a)
b = parseFloat(b)
c = parseFloat(c)

const resultado = resolveBaskara(a, b, c);

console.log(`raizes da equação: ${resultado}`);

// Exemplo para testar a equação com delta positivo: x² - 5x + 6 = 0