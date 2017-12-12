function solve(input) {

    let text = input.join('\n');
    let words = text.split(/[^A-Za-z0-9_]/).filter(w=> w!= '');

    let arr = {};
    for (let w of words) {
        
        arr[w] ? arr[w]++ : arr[w] = 1;
    }
    return JSON.stringify(arr);
}
