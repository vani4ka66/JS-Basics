//solve 80%

function solve(input) {

    let sum = 0;
    let set = new Set();

    for (let i = 0; i < input.length; i++) {
        sum = 0;
        for (let j = 0; j < input[i].length; j++) {
            let current = input[i][j];

            sum += current;
        }
        set.add(sum);
    }
    if(set.size > 1){
        console.log('false');
    }
    else{
        console.log('true');
    }
}
