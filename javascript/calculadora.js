// Variável
const num1 = document.getElementById("numero1");
const num2 = document.getElementById("numero2");
const Resultado = document.getElementById("resultado");

// Função
function somar(event){
    event.preventDefault();

//Validação de formulário
 if(num1.value == "" || num2.value == ""); 
    alert("Digite")
    return false;
}
    
    resultado.innerHTML = Number(num1.value) + Number(num2.value);{
    num1.value ="";
    num2.value ="";    
}

function sub(event){
    event.preventDefault();
//Validação de formulário
 if(num1.value == "" || num2.value == ""); 
    alert("Digite")
    return false;
}
    resultado.innerHTML = Number(num1.value) - Number(num2.value);{
    num1.value ="";
    num2.value ="";    
}

function mult(event){
    event.preventDefault();

    //Validação de formulário
 if(num1.value == "" || num2.value == ""); 
    alert("Digite")
    return false;
}
        
    resultado.innerHTML = Number(num1.value) * Number(num2.value);{
    num1.value ="";
    num2.value ="";    
}

function div(event){
    event.preventDefault();

    //Validação de formulário
 if(num1.value == "" || num2.value == ""); 
    alert("Digite")
    return false;
}
       
    resultado.innerHTML = Number(num1.value) / Number(num2.value);{
    num1.value ="";
    num2.value ="";    
} 
