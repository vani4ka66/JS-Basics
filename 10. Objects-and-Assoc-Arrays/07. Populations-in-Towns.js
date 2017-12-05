function solve(input) {

    let towns = new Map();

    for (let row of input) {
        let [name, population] = row.split(' <-> ');
        if(!towns.has(name)){
            towns.set(name, 0);
        }

        towns.set(name, towns.get(name) + Number(population));
    }

    [...towns].forEach(([towns, population]) => console.log(`${towns} : ${population}`));

}
