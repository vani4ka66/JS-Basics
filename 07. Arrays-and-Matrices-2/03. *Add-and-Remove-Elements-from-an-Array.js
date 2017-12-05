function solve(input) {

    let number = 0;
    let arr = [];

    for (let command of input) {
        if(command === 'add'){
            number+= 1;
            arr.push(number)
        }
        else{
            number += 1;
            arr.pop();
        }
    }

    if(arr.length == 0){
        console.log('Empty');
    }
    else{
        console.log(arr.join('\n'));
    }


}

solve(['add', 'add', 'remove', 'add', 'add']
);
