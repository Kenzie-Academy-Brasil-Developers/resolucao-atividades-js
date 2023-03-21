// Desafio - JavaScript: Desafio Portaria

let nome = prompt('Digite seu nome')
let idade = Number(prompt('Digite sua idade'))
let estaAcompanhado = prompt('Você está acompanhado? Digite "s" para sim e "n" para não')

if (estaAcompanhado.toLowerCase() == 's'){
    estaAcompanhado = true
} else {
    estaAcompanhado = false
}

if (idade < 18){
    alert(`Entrada não permitida para ${nome}: Menor de idade`)
} else if (idade >= 18 && estaAcompanhado){
    alert(`Entrada permitida para ${nome}: Conceder desconto`)
} else {
    alert(`Entrada permitida para ${nome}: Valor integral`)
}