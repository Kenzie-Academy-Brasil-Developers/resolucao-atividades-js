// Desafio - JavaScript: Gestão de Perguntas

// Modelo do objeto slenzie:
const slenzie = {
  nameEvent: "",
  questions: [],
};

// Modelo do objeto question:
const question = {
  user: "",
  userQuestion: "",
  vote: 0,
};

function createEvent(objEvent, name) {
  objEvent.nameEvent = name;

  if (typeof name === "string" && name.length >= 5) {
    return objEvent;
  }

  return "The input value is invalid";
}

function addQuestion(objEvent, question) {
  if (question.user === null) {
    return "The user can't be empty";
  } else if (question.userQuestion === null) {
    return "The question can't be null";
  }

  objEvent.questions.push(question);
}

function addVoteToQuestion(position, objEvent) {
  const lengthQuestions = objEvent.questions.length;
  if (position < 0 || position > lengthQuestions - 1) {
    return "Question not found.";
  } else if (!Number.isInteger(position)) {
    return "The value is not allowed";
  }

  objEvent.questions[position].vote += 1;

  return "Vote registered successfully";
}

function questionAnswered(position, objEvent) {
  const lengthQuestions = objEvent.questions.length;
  if (position < 0 || position > lengthQuestions - 1) {
    return "Question not found.";
  } else if (!Number.isInteger(position)) {
    return "The value is not allowed";
  }

  objEvent.questions[position].answered = true;
}

function unansweredQuestions(objEvent) {
  output = [];

  const questions = objEvent.questions;
  for (let i = 0; i < questions.length; i++) {
    if (questions[i].answered !== true) {
      output.push(questions[i]);
    }
  }

  return output;
}
