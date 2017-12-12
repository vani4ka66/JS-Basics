function solve(input) {
    "use strict";

    let initialMap = new Map();
    let map = new Map();

    for (let i = 0; i < input.length; i++) {
        let [product, price] = input[i].split(' : ');
        if(!initialMap.has(product[0])){
            initialMap.set(product[0], new Map());
        }
        initialMap.get(product[0]).set(product, price);
    }

    let sortedMap = [...initialMap.entries()].sort(alphabetically);
    //console.log(initialMap);

    function alphabetically(a, b) {
        return a[0].localeCompare(b[0]);
    }

    for (let [k, v] of sortedMap) {
        console.log(k);
        let sortedValues = [...v.entries()].sort(alphabetically)
        for (let [pr, price] of sortedValues) {
            console.log(`  ${pr}: ${price}`)
        }
    }

}
