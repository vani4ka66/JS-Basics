//solved 75%

function solve(base, increment) {

    let stonesSum = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let finalHeight = 0;
    let count = 0;

    for (let i = base; i >= 0; i-=2) {


        let current = i-2;
        if(current > 0){
            stonesSum += (current**2) * increment;
        }
        else{
            gold = Math.abs(current*current*increment);
        }

        count++;
        if(count % 5 != 0){

            marble += ((i-1)*4)* increment;
        }
        else{
            lapis += ((i-1)*4)* increment;
        }

        finalHeight = count * increment;
    }

    console.log(`Stone required: ${Math.ceil(stonesSum)}`)
    console.log(`Marble required: ${Math.ceil(marble)}`)
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`)
    console.log(`Gold required: ${Math.ceil(gold)}`)
    if(base % 2 == 0){
        finalHeight = (count - 1) * increment
        console.log(`Final pyramid height: ${Math.floor(finalHeight)}`)
    }
    else{
        console.log(`Final pyramid height: ${Math.floor(finalHeight)}`)
    }
}
