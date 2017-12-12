function solve(input) {

 let encript = input.shift();
 let sum = input.shift();
 let matrix = input.map(row=> row.split(' '))
 let result = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            let current = Number(matrix[i][j]);

            for (let row = 0; row < matrix.length; row++) {
                for (let col = 0; col < matrix[row].length; col++) {
                    let current2 = Number(matrix[row][col]);

                        if((current + current2) == sum){
                           //if(row + col != i + j){
                               result = (Number(row) +  Number(col)+  i + j);
                               break;
                           //}


                        }
                }
            }

        }

    }

    let word = '';
    for (let i = 0; i < encript.length; i++) {
        if(i%2 == 0){
            let current = encript.charCodeAt(i);
            let newWord = encript.charCodeAt(i) + result;
            word += String.fromCharCode(newWord);
        }
        else{
            let current = encript.charCodeAt(i);
            let newWord = encript.charCodeAt(i) - result;
            word += String.fromCharCode(newWord);
        }

    }
    console.log(word);

}

