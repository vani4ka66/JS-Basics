//solve 80%

function solve(input) {

    let arr = [];
    let pattern = /[a-zA-Z0-9]+@[a-z]+\.[a-z]+/g;

   if (match = pattern.exec(input)){

       console.log('Valid');
   }
   else{
       console.log('Invalid');
   }
}

solve('valid@email.bg');
