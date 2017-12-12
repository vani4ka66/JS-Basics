function solve(input) {
    let number = Number(input);
    let count = 0;
    let result = 0;
    let total = 0;

    if(number < 100){

        console.log(0);
        console.log(0);
    }
    else {


        while (true) {
            if (number >= 100) {

                result = number - 26;
                total += result;
                count++;
                number = number - 10;
            }
            else {
                total -= 26;
                break;
            }
        }
        console.log(count);
        console.log(total);
    }


}

