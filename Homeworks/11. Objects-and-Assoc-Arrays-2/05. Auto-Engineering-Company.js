function solve(input) {
    "use strict";

    let firstMap = new Map();
    let secondMap = new Map();

    for (let row of input) {

        let [car, model, price] = row.split(' | ');
        if(!firstMap.has(car)){
            firstMap.set(car, new Map());
        }
        if(!firstMap.get(car).has(model)){
            let oldPrice = 0;
            firstMap.get(car).set(model, oldPrice + Number(price));
        }
        else{
            let oldPrice = firstMap.get(car).get(model);
            firstMap.get(car).set(model,oldPrice + Number(price));

        }
    }

    //console.log(firstMap);
    for (let [k, v] of firstMap) {
        console.log(k);
        for (let [key, value] of v) {
            console.log(`###${key} -> ${value}`)
        }
    }


}
