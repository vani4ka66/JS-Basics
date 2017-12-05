function solve(input) {

    let arr = [];
    let arr1 = input.shift().split(/\s*\|\s*/g).filter(a=> a !== '');
    //console.log(arr);

    for (let town of input) {
        
        let [empty, townName, lat, lng] = town.split(/\s*\|\s*/);
        let townObj = {Town: townName, Latitude: Number(lat), Longitude: Number(lng)};
        arr.push(townObj);
    }
    return JSON.stringify(arr);
}
