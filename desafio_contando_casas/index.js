// Desafio - JavaScript: Contando Casas
function gerarNumeroAleatorio() {
  return Math.floor(Math.random() * 20) + 1;
}

function verificarPalpite(numeroAleatorio, palpite) {
  let tentativa = 1;

  while (numeroAleatorio !== palpite) {
    alert("Tente novamente");
    palpite = parseInt(prompt("Digite o seu palpite (número entre 1 e 20):"));
    tentativa++;
  }

  alert(`Você acertou na tentativa ${tentativa}.`);
}

const numeroAleatorio = gerarNumeroAleatorio();
let palpite = parseInt(prompt("Digite o seu palpite (número entre 1 e 20):"));

verificarPalpite(numeroAleatorio, palpite);
