// Desafio - JavaScript: Caixa Eletrônico

const user = {
  name: "Jhon Doyle Fox",
  savingsBalance: 500,
  cardsInformation: [
    {
      number: "5160 4196 4843 3388",
      creditBalance: 1000,
      ensign: "American Express",
    },
  ],
};

function validateAmount(amount) {
  amount = parseFloat(amount.replace(",", "."));

  if (isNaN(amount) || amount % 1 !== 0 || amount < 5 || amount > 500) {
    alert("This value is not allowed");

    return true;
  }
  return false;
  /* 
    parseFloat: converte a entrada em um número de ponto flutuante
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
  */
  /* 
    replace: caso a entrada tenha "," (virgula) é trocado por "." (ponto)
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace 
  */
  /* 
  isNaN: verifica se amount pode ser convertido para number
  retorna true se o valor for NaN (not a number)
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
  */
  /*
   Operador % foi usado para verificar se o amount é um numero inteiro.
   Lembre-se que para numeros inteiros o resto da divisão por 1 sempre dá zero.
   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
  */
}

// 1 - Saque
let responseWithDraw;
let withdrawnAmount;

// loop do while, para executar o prompt, enquanto o valor digitado pelo usuario for diferente de 1 ou 2.
do {
  responseWithDraw = prompt("Digite 1 para poupança ou 2 para crédito:");
} while (responseWithDraw !== "1" && responseWithDraw !== "2");

do {
  withdrawnAmount = prompt("valor de saque");
} while (validateAmount(withdrawnAmount));

function makeWithDrawal(user, responseWithDraw, withdrawnAmount) {
  if (responseWithDraw === "1" && user.savingsBalance >= withdrawnAmount) {
    user.savingsBalance -= withdrawnAmount;
    return alert("Withdrawal carried out.");
  } else if (
    responseWithDraw === "2" &&
    user.cardsInformation.creditBalance >= withdrawnAmount
  ) {
    user.cardsInformation.creditBalance -= withdrawnAmount;
    return alert("Withdrawal carried out.");
  }

  return alert("Balance unavailable");
}

makeWithDrawal(user, responseWithDraw, withdrawnAmount);

// 2 - Saldo

let responseBalance;

// loop do while, para executar o prompt, enquanto o valor digitado pelo usuario for diferente de 1 ou 2.
do {
  responseBalance = prompt("Digite 1 para poupança ou 2 para crédito:");
} while (responseBalance !== "1" && responseBalance !== "2");

function getBalance(responseBalance, user) {
  const balance =
    responseBalance === "1"
      ? user.savingsBalance
      : user.cardsInformation.creditBalance;

  return alert(balance);
  /*
 Operador ternário avalia se a condição, que é a primeira expressão é verdadeida ou falsa.
 Sendo verdadeida ele retorna a espressão que vem depois da "?", 
 sendo falsa, a espressão que vem depois do ":"
 https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 */
}

getBalance(responseBalance, user);

// 3 - Depósito

let valueForDeposit;

/* 
loop do while, para executar o prompt, enquanto o valor digitado não atender 
as regras verificadas pela função validateAmount:
O valor de depósito não pode ser do tipo string(texto).
O valor de depósito tem que ser um inteiro positivo.
O valor de depósito deve ser maior que 5 e menor que 500
*/

do {
  valueForDeposit = prompt("valor de deposito");
} while (validateAmount(valueForDeposit));

function makeDeposit(user, valueForDeposit) {
  user.savingsBalance += parseInt(valueForDeposit);

  return alert("Deposit made successfully");
}

makeDeposit(user, valueForDeposit);
