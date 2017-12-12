function solve(input) {

    let summary = new Map();

    for (let row of input) {
        let [town, products, sales] = row.split(' -> ');
        sales = sales.split(' : ').reduce((a, b) => a*b);
        if(!summary.has(town)){
            summary.set(town, new Map());
        }
        if(!summary.get(town).has(products)){
            summary.get(town).set(products, 0);
        }

        let oldSales =  summary.get(town).get(products);
        summary.get(town).set(products, oldSales + sales);
    }

    for (let [town, products] of summary) {
        console.log(`Town - ${town}`)
        for (let [product, sales] of products) {
            console.log(`$$$${product} : ${sales}`)

        }
    }
}
