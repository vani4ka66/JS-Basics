function solve(input) {

    let speed = input[0];
    let teritory = input[1];

    switch (teritory){
        case 'city':
            if(speed > 50 && speed <= 70){
            console.log('speeding');
            break;
            }
            if(speed > 50 && speed <= 90){
                console.log('excessive speeding');
                break;
            }
            if(speed > 90){
                console.log('reckless driving');
                break;
            }
            else{
                console.log();
                break;
            }
        case 'residential':
            if(speed > 20 && speed <= 40){
                console.log('speeding');
                break;
            }
            if(speed > 20 && speed <= 60){
                console.log('excessive speeding');
                break;
            }
            if(speed > 60){
                console.log('reckless driving');
                break;
            }
            else{
                console.log();
                break;
            }
        case 'motorway':
            if(speed > 130 && speed <= 150){
                console.log('speeding');
                break;
            }
            if(speed > 130 && speed <= 170){
                console.log('excessive speeding');
                break;
            }
            if(speed > 130){
                console.log('reckless driving');
                break;
            }
            else{
                console.log();
                break;
            }
        case 'interstate':
            if(speed > 90 && speed <= 110){
                console.log('speeding');
                break;
            }
            if(speed > 90 && speed <= 130){
                console.log('excessive speeding');
                break;
            }
            if(speed > 90){
                console.log('reckless driving');
                break;
            }
            else{
                console.log();
                break;
            }
    }

}

solve([120, 'interstate']);
