function solve(input) {

   let last = input.pop();
   let arr = [];

    for (let i = 0; i <= input.length ; i+= Number(last)) {
        arr.push(input[i]);
    }
    console.log(arr.join('\n'));
}
