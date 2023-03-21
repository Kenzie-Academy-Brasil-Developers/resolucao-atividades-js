// Desafio - Javascript: Dados Escolares

const alunoCurso = {
  nome: "João",
  idade: 31,
  curso: "FullStack",
  instituicao: "Kenzie Br",
  materias: ["Html", "Css", "JavaScript", "Python"],
  situacaoMatricula: true,
};

const tipoConsulta = prompt('Digite a opção da consulta. (1 - Curso | 2 - Matéria | 3 - Situação de matrícula | 4 - Gerar carteirinha')

function getTheCourse(aluno){
    alert(aluno.curso)
}

function getTheSubjects(aluno){
    alert(aluno.materias)
}

function registrationStatus(aluno){
    if (aluno.situacaoMatricula){
        aluno.situacaoMatricula = 'Ativo'
    } else {
        aluno.situacaoMatricula = 'Inativo'
    }

    alert(aluno.situacaoMatricula)
}

function generateStudentCard(aluno){
    const cardInformation = `name: ${aluno.nome}, idade: ${aluno.idade}, curso: ${aluno.curso}, instituição: ${aluno.instituicao}`

    alert(cardInformation)
}

if (tipoConsulta == 1){
    getTheCourse(alunoCurso)
} else if (tipoConsulta == 2){
    getTheSubjects(alunoCurso)
} else if (tipoConsulta == 3){
    registrationStatus(alunoCurso)
} else if (tipoConsulta == 4){
    generateStudentCard(alunoCurso)
} else {
    alert('Digite um número entre 1 e 4')
}