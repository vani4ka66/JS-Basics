function solve(input) {

    let sum = 0;
  let first = input.shift();

  if(input.length == 0){
      sum = 2*Number(first);
  }
  else{
      let last = input.pop();

      sum = Number(first) + Number(last);
  }

    console.log(sum);

}

solve(['20', '30']
);
