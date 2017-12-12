function solve(input) {

    let n = input.shift();

    for (let method of input) {
        if(method == 'chop'){
            n /= 2;
            console.log(n);
        }
        else if(method == 'dice'){
            n = Math.sqrt(n);
            console.log(n);
        }
        else if(method == 'spice'){
            n += 1;
            console.log(n);
        }
        else if(method == 'bake'){
            n *= 3;
            console.log(n);
        }
        else if(method == 'fillet'){
            n = n - (20/100*n);
            console.log(n);
        }
    }
}

solve([32, 'chop', 'chop', 'chop', 'chop', 'chop']
);
