function solve(input) {

    let matrix = input.map(row=> row.split(''));
    let checkMatrix = input.map(row=> row.toLowerCase().split(''));

    for (let i = 0; i < checkMatrix.length-2; i++) {
        for (let j = 0; j < checkMatrix[i].length -2; j++) {

            let current = checkMatrix[i][j];
            let current1= checkMatrix[i][j+2];
            let current2= checkMatrix[i+1][j+1];
            let current3 = checkMatrix[i+2][j];
            let current4 = checkMatrix[i+2][j+2];

            if (current == current1&& current == current2 &&
                current == current3 && current == current4){


                matrix[i][j] = '';
                matrix[i][j+2] = '';
                matrix[i+1][j+1] = '';
                matrix[i+2][j] = '';
                matrix[i+2][j+2] = '';
            }

        }

    }
    for (let row of matrix) {
        console.log(row.join(''));
    }


}

