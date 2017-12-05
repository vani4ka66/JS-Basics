function solve(input) {

let count = 0;
    for (let i = 0; i < input.length -1 ; i++) {
        for (let j = 0; j < input[i].length ; j++) {
            let current = input[i][j];
            let current2 = input[i + 1][j];

            if(current === current2){
                count++;
            }
        }
    }

    for (let i = 0; i < input.length ; i++) {
        for (let j = 0; j < input[i].length -1 ; j++) {
            let current = input[i][j];
            let current2 = input[i][j + 1];

            if(current === current2){
                count++;
            }
        }
    }

    console.log(count);
}
