function solve(input) {

   let k = input.shift();
   let arrFirst = [];
   let arrLast = [];

    for (let i = 0; i < input.length; i++) {
        if(i +1 <= k ){
            arrFirst.push(input[i]);
        }
    }

    let arr = input.reverse();

    for (let i = 0; i < arr.length; i++) {
        if(i + 1<= k ){
            arrLast.unshift(input[i]);
        }
    }
    
    console.log(arrFirst.join(' '));
    console.log(arrLast.join(' '));

}

solve([1, 5]
);
