function solve(input) {

    let number = 1;
    let sum1 = 0;
    let sum2 = 0;
    let lastIndex;

    for (let i = 0; i < input.length - 1; i++) {
        for (let j = 0; j < input[i].length - 1; j++) {

            lastIndex = input[i].length - 1;
            if(j+number > input[i].length && i + number > input.length){
                break;
            }
            let current1 = input[i+1][j+ number];
            let current2 = input[i+ 1][lastIndex - number]
            sum1 += Number(current1);
            sum2 += Number(current2);
            number++;
            break;
        }
    }
    let one = (sum1 + Number(input[0][0]));
    let two = (sum2 + Number(input[0][input[0].length - 1]));
    console.log(one + ' ' +  two);

}
