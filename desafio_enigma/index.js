// Desafio - JavaScript: Enigma
function countWords(word){
    let count = 0;
    if(word[0] != word[0].toUpperCase()){
        count = 1;
    }

    let flag = false;
    for(let i = 0; i<word.length; i++){
        if(word[i] == word[i].toUpperCase()){
            flag = true;
        }else if(word[i] != word[i].toUpperCase() && flag){
            flag = false;
            count++
        } 
    }
    return count;
}
