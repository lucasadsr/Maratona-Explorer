const elementoPergunta = document.querySelector("#pergunta")
const elementoResposta = document.querySelector("#resposta")
const buttonPerguntar = document.querySelector('#buttonPerguntar')
const respostas = [
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Não é possível prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim.",
]

function fazPergunta() {
    // Verifica se a pergunta está vazia
    if(elementoPergunta.value == "") {
        alert("Digite sua pergunta")
        return
    }

    // Desabilitando botão para evitar mais cliques
    buttonPerguntar.setAttribute("disabled", true)
    
    // Variáveis para construção do HTML
    const pergunta = `<div>${elementoPergunta.value}</div>`
    let resposta = respostas[geraNumeroAleatorio()]
    elementoResposta.innerHTML = pergunta + resposta
    
    elementoResposta.style.opacity = 1

    // Some a resposta e desabilita o botão
    setTimeout(function() {
        elementoResposta.style.opacity = 0
        buttonPerguntar.removeAttribute("disabled")
    }, 3000)
}

function geraNumeroAleatorio() {
    const  totalRespostas = respostas.length
    const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

    return numeroAleatorio
}