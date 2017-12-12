function solve(input) {

    let sum = 0;
    let number = input.toString();
    let length = input.toString().length;

    for (let n of input.toString()) {
        sum += Number(n);
    }
    
    if(sum / length <= 5){
        while (sum / length <= 5) {


            number += '' + 9;
            sum += 9;
            length++;
        }
        console.log(number);
    }
    else {
        console.log(number);
    }

}

solve(5835
);
