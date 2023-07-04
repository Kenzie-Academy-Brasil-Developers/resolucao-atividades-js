// Desafio - JavaScript: Desafio Portaria

// Solicita ao usuário que digite seu nome
let nome = prompt('Digite seu nome')

// Solicita ao usuário que digite sua idade e converte para um número
let idade = Number(prompt('Digite sua idade'))

// Solicita ao usuário que indique se está acompanhado ('s' para sim, 'n' para não)
let estaAcompanhado = prompt('Você está acompanhado? Digite "s" para sim e "n" para não')

// Converte a resposta do usuário para letras minúsculas e verifica se é 's' (indicando sim)
// Se for, atribui true a estaAcompanhado, caso contrário, atribui false
if (estaAcompanhado.toLowerCase() == 's'){
    estaAcompanhado = true
} else {
    estaAcompanhado = false
}

// Verifica se a idade é menor que 18
if (idade < 18){
    // Exibe um alerta informando que a entrada não é permitida devido a ser menor de idade
    alert(`Entrada não permitida para ${nome}: Menor de idade`)
} 
// Verifica se a idade é maior ou igual a 18 e se o usuário está acompanhado
else if (idade >= 18 && estaAcompanhado){
    // Exibe um alerta informando que a entrada é permitida com desconto
    alert(`Entrada permitida para ${nome}: Conceder desconto`)
} 
// Se nenhuma das condições anteriores for atendida, significa que o usuário tem 18 anos ou mais e não está acompanhado
else {
    // Exibe um alerta informando que a entrada é permitida com preço integral
    alert(`Entrada permitida para ${nome}: Valor integral`)
}
