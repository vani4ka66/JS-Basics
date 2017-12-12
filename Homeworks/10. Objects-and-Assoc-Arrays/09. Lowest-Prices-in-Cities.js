function solve(input) {

    "use strict";
    let map = new Map();
    let oldPrice = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i <input.length; i++) {

        let [town, mark, price] = input[i].split(' | ');
        if (!map.has(mark)) {
            map.set(mark, new Map);
        }
        if(!map.get(mark).has(town)) {
            map.get(mark).set(town, Number(price));
        } else {
            map.delete(town);
            map.get(mark).set(town, Number(price));
        }

    }
    for (let [mark, insideMap] of map) {
        let minPrice = Number.MAX_SAFE_INTEGER;
        let townWithLowestPrice = '';
        for (let [town, price] of insideMap) {
            if(Number(price) < minPrice) {
                minPrice = price;
                townWithLowestPrice = town;
            }
        }

        console.log(`${mark} -> ${minPrice} (${townWithLowestPrice})`);

    }
}
