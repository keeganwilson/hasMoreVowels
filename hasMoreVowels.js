const hasMoreVowels = word => {
    word = word.toLowerCase();
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let howManyVowels = 0
    for (i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            howManyVowels++
        }
    }
    if (howManyVowels <= word.length / 2) {
        return false
    }   else return true
}

console.log(hasMoreVowels('moose'));
console.log(hasMoreVowels('mice'));
console.log(hasMoreVowels('graph'));
console.log(hasMoreVowels('yay'));
console.log(hasMoreVowels('Aal'));