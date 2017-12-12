//solve 87%

function solve(input) {

    let startCol = 0;
    let startRow = 0;
    let countRight = 0;
    let countLeft = 0;
    let matrix = input;

    for (let i = 0; i < matrix.length; i++) {

            let column = matrix[i].indexOf('o');
            if (column > 0) {
                startCol = matrix[i][column];
                startRow = i;
                startCol = column;
                break;
            }
    }

    for (let i = startRow+1; i < matrix.length; i++) {
        countLeft = 0;
        countRight = 0;

        for (let j = 0; j < matrix[i].length; j++) {

            if(matrix[i][j] == '>'){
                countRight++;
            }
            if(matrix[i][j] == '<'){
                countLeft++;
            }
        }

        if(countRight > countLeft){
            startRow += 1;
            startCol += countRight-countLeft;
        }
        else if(countRight < countLeft){
            startRow += 1;
            startCol = startCol - (countLeft - countRight);
        }
        else{
            startRow += 1;
        }
    }
    if(matrix[startRow][startCol] == '_'){
        console.log("Landed on the ground like a boss!");
        console.log('' + startRow + ' ' + startCol)
    }
    else if(matrix[startRow][startCol] == '~'){
        console.log("Drowned in the water like a cat!");
        console.log('' + startRow  + ' '+ startCol)
    }
    else if((matrix[startRow][startCol] == '/') ||(matrix[startRow][startCol] == '\\') ||
        (matrix[startRow][startCol] == '|')){
        console.log("Got smacked on the rock like a dog!");
        console.log('' + startRow + ' ' + startCol)
    }
    

}
