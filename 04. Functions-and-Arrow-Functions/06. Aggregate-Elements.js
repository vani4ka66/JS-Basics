function solve(input) {

    let sum1 = 0;
    let sum2 = 0;
    let concat = '';

    for (let i = 0; i < input.length; i++) {
        let a = input[i];

        //console.log(input.length);
        sum1 += a;
        sum2 += 1/a;
        concat += a;

    }
    console.log(sum1);
    console.log(sum2);
    console.log(concat);
}
