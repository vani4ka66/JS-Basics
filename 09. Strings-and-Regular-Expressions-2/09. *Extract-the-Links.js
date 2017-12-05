function solve(input) {


    let pattern = /(www.[a-zA-z0-9\-]+([\.][a-z]+)+)/g;
    let arr = [];

    for (let sentense of input) {

        while (match = pattern.exec(sentense)){
            arr.push(match[0]);

        }
    }
    console.log(arr.join('\n'));
}

solve([
    'Join WebStars now for free, at www.web_stars.com',
    'You can also support our partners:',
    'Internet - www.internet.com',
    'WebSpiders - www.webspiders101.com',
    'Sentinel - www.sentinel.-ko'

]
);
