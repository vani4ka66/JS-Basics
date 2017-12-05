function solve(input) {

   let arr = input.sort(function (a,b) {
       return a-b
   });

    console.log(arr[0] + ' ' + arr[1]);
   
}
