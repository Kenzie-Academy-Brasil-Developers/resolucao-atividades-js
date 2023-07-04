// Desafio - JavaScript: Enigma

function countWords(word){
    let count = 0;

    // Verifica se a primeira letra da palavra não é maiúscula
    // Se não for, considera que a palavra começa com uma nova palavra
    if(word[0] != word[0].toUpperCase()){
        count = 1;
    }

    let flag = false;

    // Percorre cada letra da palavra
    for(let i = 0; i<word.length; i++){
        // Verifica se a letra atual é maiúscula
        if(word[i] == word[i].toUpperCase()){
            flag = true;
        }
        // Verifica se a letra atual não é maiúscula e a flag está marcada
        // Isso indica que uma nova palavra começou
        else if(word[i] != word[i].toUpperCase() && flag){
            flag = false;
            count++
        } 
    }

    // Retorna o número de palavras contadas
    return count;
}
