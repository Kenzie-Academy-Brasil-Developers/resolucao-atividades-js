// Desafio - JavaScript: Aprovado ou reprovado
function verificaAprovacao(numMaterias){
    let nome = prompt("Digite o nome do aluno:");

    if(nome.length < 5){
        return "Nome inválido";
    }else{
        let presenca = parseInt(prompt("Digite a quantidade de presenças do aluno:"));

        if (presenca < 0 || presenca > 10) {
            return "Valor de presença inválido";
        } else {
            let somaNota = 0;
            
            for (let i = 1; i <= numMaterias; i++) {
                let materia = prompt("Digite o nome da matéria " + i + ":");
                let nota = parseInt(prompt("Digite a nota da matéria " + materia + ":"));

                if (nota < 0 || nota > 10) {
                    return "Valor de nota inválido";

                } else {
                    somaNota += nota;
                }
            }

            
            let mediaNota = somaNota / numMaterias;

            if (mediaNota >= 8 && presenca >= 6) {
                return "A nota do aluno " + nome + " é de " + mediaNota + " e sua presença é de " + presenca + ": Aluno aprovado!";  
            } else {
                return "A nota do aluno " + nome + " é de " + mediaNota + " e sua presença é de " +  presenca + ": Aluno reprovado!";
            }
            
        }
    }
}

console.log(verificaAprovacao(10));