function solve(input) {

    let result = false;

    for (let i = 0; i < input.length /2; i++) {
        let letter1 = input[i];
        let letter2 = input[input.length - i-1];

        if(letter1 != letter2){
            result = false;
            break;
        }
            result = true;
    }

    console.log(result);
}

solve('haha');
