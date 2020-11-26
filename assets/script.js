let nome = document.getElementById("nome")
let texto = document.getElementById('texto')
let nomeOk = false
let textoOk = false

function validaNome(){
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'red'
    }else{
        txtNome.innerHTML = 'Nome válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }

}

function validaTexto(){
    let txtTexto = document.querySelector('#txtTexto')
    if(texto.value.length > 100){
        txtTexto.innerHTML = 'Texto muito grande'
        txtTexto.style.color = 'red'
        txtTexto.style.display = 'block'
    }else{
        txtTexto.innerHTML.display = 'none'
        textoOk = true
    }

}

function enviar(){
    if (nomeOk == true && textoOk == true) {
        alert('Formulário enviado com sucesso')
    }else{
        alert('Preencha o formulário corretamente')
    }
}