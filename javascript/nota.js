// Variaveis
const inputNota = document.getElementById("nota");
const result = document.getElementById("result");
const message = document.getElementById("message");

// Função
function resultadoNotaClick(event) {
    event.preventDefault();

 

    // logica - condição 
    if (inputNota.value >= 6) {
        result.innerHTML = "Aprovado";
    } else {
        result.innerHTML = "REPROVADO";
    }

    //Validação de formulário
 if (inputNota.value == ""); 
    message.style.display = "block";
        return false;

        message.style.display = "none";

}


