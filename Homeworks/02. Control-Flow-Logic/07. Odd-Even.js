function evenOdds([input]) {

    if(input % 2 == 0){
        console.log("even");
    }
    else if(input % 2 == Math.round(input % 2)){
        console.log("odd");
    }
    else{
        console.log("invalid")
    }
}


evenOdds(1.5);
