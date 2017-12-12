function solve(input) {

    let heroData = [];

    for (let i = 0; i < input.length; i++) {
        let curentHeroArguments = input[i].split(' / ');
        let currentHeroItems = [];
        let currentHeroName = curentHeroArguments[0];
        let currentHeroLevel = Number(curentHeroArguments[1]);

        if(curentHeroArguments.length > 2 ){
            currentHeroItems = curentHeroArguments[2].split(', ');
        }

        let hero = {
            name: currentHeroName,
            level: currentHeroLevel,
            items: currentHeroItems
        };

        heroData.push(hero);
    }
    
    console.log(JSON.stringify(heroData));

}
