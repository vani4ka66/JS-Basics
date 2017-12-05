function solve(input, word) {

    let count = 0;
    let index = 0;
    let pattern = /\b(.+?)\b/g;
    let arr = [];

    while (match = pattern.exec(input)){
        let letter = match[0].toString().toLowerCase();
        if(letter == word.toLowerCase())
        count++;
    }
    console.log(count);
}
