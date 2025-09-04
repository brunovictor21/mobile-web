// Variável
const num1 = document.getElementById("numero1");
const num2 = document.getElementById("numero2");
const Resultado = document.getElementById("resultado");

// Função
function somar(event){
    event.preventDefault();
    console.log(num1.value);
    console.log(num2.value);
    resultado.innerHTML = Number(num1.value) + Number(num2.value);
    num1.value ="";
    num2.value ="";    
}

function sub(event){
    event.preventDefault();
    console.log(num1.value);
    console.log(num2.value);
    resultado.innerHTML = Number(num1.value) - Number(num2.value);
    num1.value ="";
    num2.value ="";    
}

function mult(event){
    event.preventDefault();
    console.log(num1.value);
    console.log(num2.value);
    resultado.innerHTML = Number(num1.value) * Number(num2.value);
    num1.value ="";
    num2.value ="";    
}

function div(event){
    event.preventDefault();
    console.log(num1.value);
    console.log(num2.value);
    resultado.innerHTML = Number(num1.value) / Number(num2.value);
    num1.value ="";
    num2.value ="";    
}