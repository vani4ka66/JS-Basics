function solve(input) {

    let arr = [];
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
            let current = input[i][j];
            
            arr.push(current);
        }
    }
   let arr1 = arr.sort(function (a,b) {
       return a-b
   });

    console.log(arr.reverse()[0]);
}

solve([[20, 50, 10],
    [8, 33, 145]]

);
