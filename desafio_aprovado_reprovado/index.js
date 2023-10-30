// Desafio - JavaScript: Aprovado ou reprovado

function verificaAprovacao(numMaterias) {
  // Solicita ao usuário que digite o nome do aluno
  const nome = prompt("Digite o nome do aluno:");

  // Verifica se o tamanho do nome é menor que 5 caracteres
  if (nome.length < 5) {
    return "Nome inválido";
  } else {
    // Solicita ao usuário que digite a quantidade de presenças do aluno
    const presenca = parseInt(
      prompt("Digite a quantidade de presenças do aluno:")
    );

    // Verifica se o valor de presenca é menor que 0 ou maior que 10
    if (presenca < 0 || presenca > 10) {
      return "Valor de presença inválido";
    } else {
      let somaNota = 0;

      // Loop que itera sobre o número de matérias informado
      for (let i = 1; i <= numMaterias; i++) {
        // Solicita ao usuário que digite o nome da matéria atual
        const materia = prompt("Digite o nome da matéria " + i + ":");
        // Solicita ao usuário que digite a nota da matéria atual
        const nota = parseInt(
          prompt("Digite a nota da matéria " + materia + ":")
        );

        // Verifica se o valor da nota é menor que 0 ou maior que 10
        if (nota < 0 || nota > 10) {
          return "Valor de nota inválido";
        } else {
          somaNota += nota;
        }
      }

      // Calcula a média das notas
      const mediaNota = somaNota / numMaterias;

      // Verifica se a média das notas é maior ou igual a 8 e a presença é maior ou igual a 6
      if (mediaNota >= 8 && presenca >= 6) {
        return (
          "A nota do aluno " +
          nome +
          " é de " +
          mediaNota +
          " e sua presença é de " +
          presenca +
          ": Aluno aprovado!"
        );
      } else {
        return (
          "A nota do aluno " +
          nome +
          " é de " +
          mediaNota +
          " e sua presença é de " +
          presenca +
          ": Aluno reprovado!"
        );
      }
    }
  }
}

// Chama a função verificaAprovacao passando 10 como argumento para o parâmetro numMaterias e imprime o resultado no console
console.log(verificaAprovacao(10));
