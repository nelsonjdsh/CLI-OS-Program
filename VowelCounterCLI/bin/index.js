#!/usr/bin/env node

const vowel_counter = (text) => {
    
    let foundVowels = 0;

    if(text == null || !text){
        return ("ArgumentNullException");
    }

    if(text == "" || !isNaN(text)){
        return foundVowels = {}
    }

    let vowels = ["a", "e", "i", "o", "u"]

    for (let letter of text.toLowerCase()) {
        if (vowels.includes(letter)) {
            foundVowels++;
        }
    }

    return (foundVowels)
}

// console.log('Vowels Found: ' + vowel_counter(text))



module.exports = vowel_counter;