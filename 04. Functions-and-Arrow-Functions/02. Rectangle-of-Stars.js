function stars(input) {

    let star = '';

   for(let i = 0; i < Number(input); i++){

       star += '*';
       star += ' ';
   }

   for(let i = 0; i < Number(input); i++){
       console.log(star.trim())
   }

}

stars('2');
