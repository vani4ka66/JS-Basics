function solve(str, input) {


    for (let word of input) {

       while(str.indexOf(word) > -1){
           str = str.replace(word, '\-'.repeat(word.length));

       }
    }

    console.log(str);
}

solve('roses are red, violets are blue, red', [', violets are', 'red']
);
