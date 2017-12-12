function solve(input) {

   let arr = input.sort(function (a, b) {
       if(a.length != b.length){
        return a.length - b.length
       }
       return (a< b) ? -1 : (a> b) ? 1:0
   });

    console.log(arr.join('\n'));
}
