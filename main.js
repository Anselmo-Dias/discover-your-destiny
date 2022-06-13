// Variaveis 
const elementAnswer = document.querySelector("#answer")
const elementInput = document.querySelector('#inputQuestion')
const elementButton = document.querySelector('#buttonQuestion')


const answers = [
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

function askQuestion(object, pathNewImage) {
    if(elementInput.value == "") {
        document.getElementById(object).src=pathNewImage
        alert("Faça sua pergunta, senão não revelarei seu destino")
        return
    }
    
    const pergunta = '<div>' + elementInput.value + '</div>'

    elementButton.setAttribute("disabled", true)
    
    const totalAnswers = answers.length
    const randomNumber = Math.floor(Math.random() * totalAnswers)

    elementAnswer.innerHTML = pergunta + answers[randomNumber]

    elementAnswer.style.opacity = 1;

    setTimeout( function() {
        elementAnswer.style.opacity = 0;
        elementButton.removeAttribute("disabled")
    }, 3000)
}