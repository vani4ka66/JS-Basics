//solve 66%

function solve(input) {

    let arr = input.map(r=> r.split('|'));
    let result = [];
    let sum = 0;

    for (let obj of arr) {
        let wordPattern = /[a-zA-Z]+\s*[a-zA-z]+/g;
        let digitPattern = /[0-9]+\.*[0-9]+/g;
        let match1 = wordPattern.exec(obj);
        let match2 = digitPattern.exec(obj);

        if(match1){
            result.push(match1);
        }
        if(match2){
            sum += Number(match2);
        }
    }

    console.log(result.join(', '));
    console.log(sum);
}

solve([
    '| Sofia           | 300',
    '| Veliko Tarnovo | 500',
    '| Yambol          | 275'
    ]);
