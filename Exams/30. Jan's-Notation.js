function solve(input) {

    let arr = [];
    let sum = 0;
    let isFinished = false;
    for (let i = 0; i < input.length; i++) {

        let current = input[i];

        if(current != '+' && current != '-' && current != '*' && current != '/'){
            arr.push(current);
        }
        else{
            if(arr.length < 2){
                console.log('Error: not enough operands!');
                isFinished = true;
                break;
            }
            let second = arr.pop();
            let first = arr.pop();
            if(current == '+'){
                sum = first + second;
                arr.push(sum);
            }
            else if(current == '-'){
                sum = first - second;
                arr.push(sum);
            }
            else if(current == '*'){
                sum = first * second;
                arr.push(sum);
            }
            else if(current == '/'){

                sum = first / second;
                arr.push(sum);
            }
        }

    }
    if(!isFinished) {
        if (arr.length > 1) {
            console.log('Error: too many operands!')
        }
        else {
            console.log(arr.join(''));
        }
    }

}

