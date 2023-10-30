// Desafio - JavaScript: Acerte o Número

// Função para gerar um número aleatório entre 1 e 20
function gerarNumeroAleatorio() {
  return Math.floor(Math.random() * 20) + 1;
}

// Função para verificar o palpite do usuário em relação ao número aleatório
function verificarPalpite(numeroAleatorio, palpite) {
  let tentativa = 1;

  // Enquanto o número aleatório for diferente do palpite do usuário, continua pedindo mais palpites
  while (numeroAleatorio !== palpite) {
    alert("Tente novamente");
    palpite = parseInt(prompt("Digite o seu palpite (número entre 1 e 20):"));
    tentativa++;
  }

  alert(`Você acertou na tentativa ${tentativa}.`);
}

// Gera um número aleatório
const numeroAleatorio = gerarNumeroAleatorio();

// Solicita ao usuário que digite um palpite
const palpite = parseInt(prompt("Digite o seu palpite (número entre 1 e 20):"));

// Chama a função verificarPalpite passando o número aleatório e o palpite do usuário como argumentos
verificarPalpite(numeroAleatorio, palpite);
