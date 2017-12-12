function solve(key, text) {

    let count = 0;
    let indexof = text.indexOf(key);

    while(indexof > -1){

        count++;
        indexof  = text.indexOf(key, indexof + 1);
    }

    console.log(count);
}
