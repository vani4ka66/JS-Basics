function letters(word, letter) {

    let count = 0;

    for(let i = 0; i < word.length; i++) {

        if(word[i] == letter){
            count ++;
        }
        else {
            continue;
        }
    }

    console.log(count);
}

letters('hello', 'l')
