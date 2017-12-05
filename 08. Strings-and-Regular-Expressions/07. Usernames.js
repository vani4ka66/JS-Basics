function solve(input) {

    let arr = input.map(r=> r.split('@'));
    let total = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j+=2) {

            let current = arr[i][j];
            let next = arr[i][j+1];
            let result = current + '\.' + next[0];

            for (let k = 0; k < next.length; k++) {
               if(next[k] === '\.'){
                   result += next[k+1];
               }
            }

            total.push(result);
        }
    }
    console.log(total.join(', '));
}

solve(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);
