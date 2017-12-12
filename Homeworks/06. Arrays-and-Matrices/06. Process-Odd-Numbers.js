function solve(input) {

    let arr = [];
    for (let i = 0; i < input.length; i++) {

        if(i %2 !== 0){
           let n = input[i]*2;
           arr.push(n);
        }
    }

    console.log(arr.reverse().join(' '));
}

solve([10, 15, 20, 25]
);
