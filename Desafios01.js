// CÁLCULO DE IMC

 /*const nome = "Carlos";
const peso = 84;
const altura = 1.88;

const imc = peso / (altura * altura);

if (imc >= 30) {
    console.log(`Carlos,você está acima do peso`)
} else {
    console.log(`Carlos,você não está acima do peso`)
} */

//CÁLCULO DE APOSENTADORIA

const nome = "silvana"
const sexo = "F"
const idade = 48
const contribuicao = 23

const total = contribuicao + idade


if(sexo == "F") {
    if (total >= 85) 
    console.log(`${nome},você ja pode se aposentar`)
 else 
    console.log(`${nome},você ainda não pode se aposentar`)
  
}
if(sexo == "M") {
    if (total >= 95) 
    console.log(`${nome},você ja pode se aposentar`)
 else 
    console.log(`${nome},você ainda não pode se aposentar`)
    
}

    