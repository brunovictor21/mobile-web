// Variaveis
const inputNota = document.getElementById("nota");
const result = document.getElementById("result");

// Função
function resultadoNotaClick(event) {
    event.preventDefault();

    // logica - condição 
    if (inputNota.value >= 6) {
        result.innerHTML = "Aprovado";
    } else {
        result.innerHTML = "REPROVADO";
    }
}


