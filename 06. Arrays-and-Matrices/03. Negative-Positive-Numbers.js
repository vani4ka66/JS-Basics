function solve(input) {

    let arr = [];

    for (let obj of input) {
        if(obj >= 0){
            arr.push(obj)
        }
        else{
            arr.unshift(obj);
        }
    }
    console.log(arr)
}

solve([3, -2, 0, -1]
);
