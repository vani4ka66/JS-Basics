function orbit(input){

    let set = new Set();

    for (let row of input) {

        set.add(row);
    }

    let sortedArr = [...set].sort(alphabetically);
    console.log(sortedArr.join('\n'));

    function alphabetically(a, b) {
        if(a.length == b.length){
           return a.localeCompare(b);
        }
        return a.length - b.length
    }

}
