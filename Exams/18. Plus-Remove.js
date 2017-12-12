function solve(input) {

    let matrix = input.map(row=> row.split(''));
    let currentMatrix = input.map(row=> row.toLowerCase().split(''));

    for (let i = 0; i < currentMatrix.length - 2; i++) {
        for (let j = 0; j < currentMatrix[i].length - 1; j++) {

            let current = currentMatrix[i][j + 1];
            let current1 = currentMatrix[i + 1][j];
            let current2 = currentMatrix[i + 1][j + 1];
            let current3 = currentMatrix[i + 1][j + 2];
            let current4 = currentMatrix[i + 2][j + 1];


            if(current == current1 && current == current2 && current == current3 && current == current4){

                matrix[i][j + 1] = '';
                matrix[i + 1][j] = '';
                matrix[i + 1][j + 1] = '';
                matrix[i + 1][j + 2] = '';
                matrix[i + 2][j + 1] = '';
            }
        }

    }
    for (let row of matrix) {
        console.log(row.join(''));
    }

}

