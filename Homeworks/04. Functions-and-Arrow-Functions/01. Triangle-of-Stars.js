function stars(input) {

    let star = '';

   for(let i = 1; i <= Number(input); i++){

       star += '*';
       console.log(star)
   }

    for(let i = Number(input - 1); i >= 1; i--){

        let stars = star.substring(i, (Number.input - 1));
        console.log(stars)
    }
}

stars('5');
