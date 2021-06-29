// 1.- Implementa una función que determine si una cadena de texto dada esta formada por
// caracteres únicos, considera mayúsculas, minúsculas.

let checkedCharacters = [];

const hasUniqueCharacters = (characters) => {
    for (let character of characters.trim()) {        
        let char_lowered = character.toLowerCase();
        if (checkedCharacters.includes(char_lowered)) {
            return false;
        } 
        checkedCharacters.push(char_lowered);
    }
    return true;
}

module.exports = {hasUniqueCharacters};