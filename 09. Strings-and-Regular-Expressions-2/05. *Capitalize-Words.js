function solve(input, substr) {

    let arr = '';
    arr += input[0].toUpperCase();
    
    for (let i = 0; i < input.length - 1; i++) {
        let letter = input[i];
        let next = input[i+1];

        if(letter !== " "){
            arr += next.toLowerCase();
        }
        else{
            arr += next.toUpperCase();
        }
    }
    console.log(arr);
}
