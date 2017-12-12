function solve(input) {


    let total = 0;

    for (let i = 0; i < input.length -1; i++) {
        let row = input[i].split(' ');

        let base = 10;
        let extra = 0;
        total = 0;
        let extrasnow = 0;

        let car = row[0];
        let fuel = row[1];
        let route = row[2];
        let luggage = row[3];

        extra = luggage*0.01;
        if(fuel == 'gas'){
            base *= 1.2;
        }
        else if(fuel == 'petrol'){
            base *= 1;
        }
        else  if(fuel == 'diesel'){
            base *= 0.8;
        }

        base += extra;
        extrasnow = 0.3* base;

        if(route == 1){

            total = 110*(base/100);
            total += 10*(extrasnow/100);

        }
        else if(route == 2){
            total = 95*(base/100);
            total += 30*(extrasnow/100);
        }

        console.log(`${car} ${fuel} ${route} ${Math.round(total)}`);
    }

}

