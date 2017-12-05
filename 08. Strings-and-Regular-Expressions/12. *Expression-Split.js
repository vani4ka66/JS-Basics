function solve(input) {

    let regex = /[ ();\.,]+/;
    let arr = input.split(regex);

    for (let word of arr) {

        console.log(word);

    }
}

solve('let sum = 1 + 2;if(sum > 2){\tconsole.log(sum);}');
