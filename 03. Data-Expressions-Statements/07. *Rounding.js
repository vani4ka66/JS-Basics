function moovies(input) {

    let num = Number(input[0]);
    let count = input[1];
    let v = '1' + ('0'.repeat(count));
    
    let n = Math.round(num* Number(v))/ Number(v);
   console.log(n)
}
