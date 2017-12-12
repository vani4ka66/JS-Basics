
function solve(input) {

    let arr = [];
    let result = [];
    let pattern = /[0-9]+/g;
    let match = pattern.exec(input);

    arr.push(match);
   while(match){
       match = pattern.exec(input);
       arr.push(match);
    }

    for (let i = 0; i < arr.length - 1; i++) {

       let number = (Number(arr[i]).toString(16)).toUpperCase();
       let total = '0x' + '0'.repeat(4-number.length)  + number;
       result.push(total);
    }
    console.log(result.join('-'));
}
