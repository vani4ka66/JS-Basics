function solve([bill, mood]) {

    let result = 0;
    if(mood == "happy"){

        result = bill* 0.1;
    }
    else if(mood == "married"){
        result = bill* 0.0005;
    }
    else if(mood == "drunk"){
        let tip  = bill* 0.15;
        result = Math.pow(tip, tip.toString().charAt(0));
    }
    else{
        result = bill * 0.05;
    }
    console.log(result.toFixed(2));

}

