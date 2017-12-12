function solve(input) {

    let arr = [];
    let pattern = /[a-zA-Z0-9_]+/g;

   while (match = pattern.exec(input)){

       arr.push(match);
   }
    console.log(arr.join('|'));
}

solve('_(Underscores) are also word characters');
