function solve(input) {

    let arr = [];
    arr.push(input[0]);
    let max = input[0];

    for (let i = 0; i < input.length - 1; i++) {

        if(input[i+1] >= max){
            arr.push(input[i+1])
            max = input[i+1];
        }
    }
    console.log(arr.join('\n'));
}
