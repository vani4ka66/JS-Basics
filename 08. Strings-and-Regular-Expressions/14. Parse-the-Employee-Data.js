 function solve(emplyees) {
  let regex =  /^([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - ([a-zA-Z0-9\- ]+)$/;
 
    for (let em of emplyees) {
      let result = em.match(regex);
        if(result){
            console.log(`Name: ${result[1]}
Position: ${result[3]}
Salary: ${result[2]}`)
        }
    }
}

solve([
    'Isacc - 1000 - CEO',
    'Ivan - 500 - Employee',
    'Peter - 500 – Employee'

]);
