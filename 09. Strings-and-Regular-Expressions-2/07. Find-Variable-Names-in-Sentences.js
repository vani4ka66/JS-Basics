function solve(input) {

    let arr = [];
    let arr1 = [];
    let pattern = /\b_[a-zA-Z0-9]+\b/g;
    while (match = pattern.exec(input)){
        arr.push(match);
    }

    for (let word of arr) {
        let letter = word.toString().substring(1, word.toString().length)
        arr1.push(letter)
    }
    console.log(arr1.join(','));
}
