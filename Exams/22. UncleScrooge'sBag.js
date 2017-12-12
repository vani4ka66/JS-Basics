function solve(input) {

    let sum = 0;
    let coins = 0,
        bronzeCoins = 0,
        silverCoins = 0,
        goldCoins = 0;

    for (let i = 0; i < input.length; i++) {

       let tokens = input[i].split(' ');
       let type = tokens[0].toLowerCase();
       let value = tokens[1];

       if(value > 0 && isInt(value) && type === 'coin'){
           coins += parseInt(value);
       }
    }

    goldCoins += Math.floor(coins/100);
    coins = coins - goldCoins*100;
    silverCoins += Math.floor(coins/10);
    bronzeCoins += coins - silverCoins*10;

    console.log('gold : ' + goldCoins);
    console.log('silver : ' + silverCoins);
    console.log('bronze : ' + bronzeCoins);

    function isInt(n) {
        return n% 1 === 0;
    }
}

