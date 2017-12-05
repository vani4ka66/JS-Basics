    function cappyJuice(strArr) {

    let container = {};
    let result = {};

    for (let i = 0; i < strArr.length; i++) {
        let temp = strArr[i].split(' => ');
        if (!container.hasOwnProperty(temp[0])) {
            container[temp[0]] = Number(temp[1]);
        } else {
            container[temp[0]] += Number(temp[1]);
        }
        if (container[temp[0]] >= 1000 || Number(temp[1]) >= 1000) {
           
                result[temp[0]] = container[temp[0]] ;
        }
    }

    for (let juice in result) {
        console.log(`${juice} => ${Math.floor(result[juice] / 1000)}`);
    }
}
