function solve(input) {

    let arr = input.map(r=> r.split(' '));
    let matrix  = input.map(c=> c.split(' '));
    let sum1 = 0;
    let sum2 = 0;
    let count = 1;
    let lastIndex;

    for (let i = 0; i < arr.length-1; i++) {
        for (var j = 0; j < arr[i].length-1; j++) {
            lastIndex = arr[i].length - 1;

            if(j+count >= arr.length){
                break;
            }
            let current1 = arr[i+1][j+count];
            let current2 = arr[i+1][lastIndex - count];

            sum1+= Number(current1);
            sum2 += Number(current2);
                count++;
                break;
        }
    }
    sum1 += Number(arr[0][0]);
    sum2 += Number(arr[0][lastIndex]);

    if(sum1 == sum2){
        for (let i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr[i].length; j++) {
                matrix[i][j] = sum2;
            }
        }
        matrix[0][0] = arr[0][0];
        matrix[0][matrix[0].length - 1] = arr[0][arr[0].length - 1];

        let counter = 1;
        for (let i = 0; i < arr.length-1; i++) {
            for (let j = 0; j < arr[i].length-1; j++) {
                lastIndex = arr[i].length - 1;

                if(j+counter >= arr.length){
                    break;
                }
                let current1 = arr[i+1][j+counter];
                matrix[i+1][j+counter] = current1;
                let current2 = arr[i+1][lastIndex - counter];
                matrix[i+1][lastIndex - counter] = current2;
                counter++;
                break;

            }
        }
        for (let i = 0; i < matrix.length; i++) {
            console.log(matrix[i].join(' '));
        }
    }
    else{
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i].join(' '));
        }
    }

}
solve(['1 2 1',
       '3 2 1',
       '0 0 0'
   ]
);
