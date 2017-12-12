function solve(input) {

    let last = input.pop();
    let arr = input;
    for (let i = 0; i < last % input.length; i++) {
        let lastArr = arr.pop();
        arr.unshift(lastArr);
    }
    console.log(arr.join(' '));
}
