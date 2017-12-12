function solve(input) {

    let samoaX = 7;
    let samoaY = 3;

    let tongaX = 2;
    let tongaY = 8;

    let tokelauX = 9;
    let tokelauY = 1;

    let cookX = 9;
    let cookY = 8;

    let tuvaluX = 3;
    let tuvaluY = 3;

    for (let i = 0; i < input.length; i+=2) {
        let x = input[i];
        let y = input[i+1];

        if( x>= samoaX-2 && x <= samoaX && y>= samoaY && y <= samoaY +3 ){
            console.log('Samoa')
        }
        else if( x>= tongaX-2 && x <= tongaX && y>= tongaY-2 && y <= tongaY ){
            console.log('Tonga')
        }
        else if( x>= tuvaluX-2 && x <= tuvaluX && y>= tuvaluY && y <= tuvaluY +2 ){
            console.log('Tuvalu')
        }
        else if( x>= tokelauX-1 && x <= tokelauX && y>= tokelauY-1 && y <= tokelauY ){
            console.log('Tokelau')
        }
        else if( x>= tokelauX-5 && x <= tokelauX && y>= tokelauY-1 && y <= tokelauY ){
            console.log('Cook')
        }
        else {
            console.log('On the bottom of the ocean');
        }

    }

}

solve([4, 2, 1.5, 6.5, 1, 3]
);
