function solve(input) {
    "use strict";

    let map = new Map();
    let arr = new Set();

    for (let i = 0; i < input.length; i++) {
        let [system, component, subComponent] = input[i].split(' | ');

        if(!map.has(system)){
            map.set(system, new Map());
        }
        if(!map.get(system).has(component)){
            arr.add(subComponent);
            map.get(system).set(component, new Array());

        }
            map.get(system).get(component).push(subComponent);

    }
    let sortedMap = [...map.entries()].sort(sorting);
    for (let [key, values] of sortedMap) {
        console.log(key);
        let secondMap = [...values.entries()].sort(secondSort)
        for (let [k, v] of secondMap) {

            console.log(`|||${k}`)
            for (let obj of v) {
                console.log(`||||||${obj}`)
            }
        }
    }

    function sorting(a, b) {
        if(a[1].size != b[1].size){
            return b[1].size - a[1].size;
        }
        return a[0].localeCompare(b[0]);
    }

    function secondSort(a, b) {
        return b[1].length - a[1].length;
    }
}
