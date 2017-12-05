function divide(num1) {

    let leap = (num1 % 4 == 0 && num1 % 100 != 0) || (num1 % 400 == 0) ;
        console.log(leap? "yes" : "no")
}
