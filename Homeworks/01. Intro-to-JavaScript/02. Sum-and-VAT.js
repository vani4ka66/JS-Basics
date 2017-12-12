function sumNumbers(input) {

let sum = 0;



    for(i = 0; i< input.length; i++) {

       sum += Number(input[i]);

    }


    let vat = sum*(20/100);

    let total = sum*1.2;

   console.log("sum = " + sum);

    console.log("VAT = " + vat);

    console.log("total = " + total);

}
