//solve 90%

function solve(input) {


    let pattern = /(\-*)\b([0-9]+(\.[0-9]+)*)\b/g;
    let sum = 0;
    let arr = [];
    let total = 0;
    let arr1 = [];


    for (let i = 0; i < input.length; i++) {
        sum = 0;
        arr1 = [];
        let sentence = input[i];

        while (match = pattern.exec(sentence)){
            sum += Number(match[0]);
            arr1.push(match[0]);


        }
        if((sum > total || total == 0)  && sum != 0){
            arr = arr1;
            total = sum;
        }

    }
    if(Math.abs(total) > 0){
        console.log(total + ' = ' + arr.join(' + '));

    }
    else {
        console.log('no data');
    }
}


