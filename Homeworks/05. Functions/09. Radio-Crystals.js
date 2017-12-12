function solve(input) {

    let target = input.shift();


    for (let i = 0; i < input.length; i++) {
        let n = Number(input[i]);
        let cut = 0;
        let lap = 0;
        let grind = 0;
        let etch = 0;
        let xray = 0;
        let transport = 0;

        if(n > target - 1){
            console.log(`Processing chunk ${input[i]} microns`);

            while (n >= target - 1){
                if(n/4 >= target - 1){
                    n /= 4;
                    cut++;
                }
               else {
                    break;
                }
            }

            if(cut > 0){
                console.log(`Cut x${cut}`);
                console.log('Transporting and washing');
            }
            while (n >= target - 1){
                if(n - (20/100*n) >= target - 1){
                    n = n- (20/100*n);
                    lap++;
                }
                else {
                    break;
                }
            }
            if(lap > 0){
                console.log(`Lap x${lap}`);
                console.log('Transporting and washing');

            }
            while (n >= target - 1){
                if(n - 20 >= target - 1){
                    n -=20;
                    grind++;
                }
                else {
                    break;
                }

            }
            if(grind > 0){
                console.log(`Grind x${grind}`);
                console.log('Transporting and washing');

            }
            while (n >= target - 1) {
                if (n - 2 >= target - 1) {
                    n = n-2;
                    etch++;
                }
                else {
                    break;
                }
            }
            if(etch > 0){
                console.log(`Etch x${etch}`);
                console.log('Transporting and washing');

            }
            if (n === target - 1){
                n += 1;
                xray++;
            }
            if(xray > 0){
                console.log(`X-ray x${xray}`);
            }
            let m = parseInt(n);
            console.log(`Finished crystal ${m} microns`)
        }
    }
}
