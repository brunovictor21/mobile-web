// Variaveis
const inputFesta = document.getElementById("festa");
const idade = document.getElementById("idade");
const message = document.getElementById("message");

// Função
function resultadoIdadeClick(event) {
    event.preventDefault();

 

    // logica - condição 
    if (inputFesta.value >= 18) {
        alert("Poderá entrar na Festinha")
        idade.innerHTML = "Poderá entrar na Festinha";
    } else {
        alert("Você é menor de idade, entre com seu papai ou sua mamãe");
        idade.innerHTML = "Você é menor de idade, entre com seu papai ou sua mamãe";
    }

    //Validação de formulário
 if (inputFesta.value == ""); 
    message.style.display = "block";
        return false;

    message.style.display = "none";


}