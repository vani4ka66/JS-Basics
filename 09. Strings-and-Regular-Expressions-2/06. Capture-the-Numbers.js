function solve(input) {

    let arr = [];
    let pattern = /[0-9]+/g;

    for (let i = 0; i < input.length; i++) {
        let sentence = input[i];
        //let match = pattern.exec(sentence);
       while (match = pattern.exec(sentence)){
           arr.push(match);
       }
    }
    console.log(arr.join(' '));
}
