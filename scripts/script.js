let nom = document.getElementById("nome")
let ida = document.getElementById("idade")

let res = document.getElementById("res")

function enviar() {
    if (nom.value.length == 0 || ida.value.length == 0) {
        window.alert("Insira Valores Reais Abestado")
        nom.value = ""
        ida.value = ""
    } else {
        res.innerHTML += `<div class="card">
                        <p class="letras">Nome do Aluno: ${nom.value} </p>
                        <p class="letras">Idade do Aluno: ${ida.value} </p>
                        </div>`
        nom.value = ""
        ida.value = ""
    }





}