//ARREDONDAMENTO DE NOTAS

const prompt = require('prompt-sync')();

function arredondarNota(nota){
 
    for(let i = nota; i <= 100 ; i++){
        if(i % 5 === 0){
            if(i - nota < 3){
                nota = i;
            }
            return nota;
        }
    }
    return nota;
}

function sysNotas(nota){
    
    if(nota >= 38){   
        nota =  arredondarNota(nota);
        if(nota >= 40){
            return `Aluno aprovado nota ${nota}`;
        }else{
            return `Aluno reprovado nota ${nota}`;
        }
    }
    return `Aluno reprovado nota ${nota}`;
}

let nota = prompt("Digite a nota do aluno: ");
nota = parseFloat(nota);

if(nota >= 0 && nota <= 100){
    const resultado = sysNotas(nota);
    console.log(resultado)
}
else{
    console.log("Nota Inválida!")
}