function solve(input) {

    let result = 1;
    let set = new Set();

    for (let i = 0; i < input.length; i++) {
        let number = Number(input[i]);
        
        if(number >= 0 && number < 10){

            for (let j = 1; j <= number; j++) {
                result *= input[i+j];
            }
            if(!isNaN(result)){
                set.add(result);
            }

            result = 1;
            continue;
        }
        else {
            continue;
        }

    }
    let arr = Array.from(set);
    
    let last =  arr.sort(function (a, b) {return a-b}).pop();
        console.log(last);

}
