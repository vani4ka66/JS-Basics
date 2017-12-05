function  solve(input) {

    let all = input.join('');
    let chars = Array.from(all);
    let reversed = chars.reverse();
    let joined = reversed.join('');
    
    console.log(joined);
}
