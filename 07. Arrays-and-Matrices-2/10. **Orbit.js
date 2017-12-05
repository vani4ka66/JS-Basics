function orbit([width, height, y, x]){
    function fill(matrix, width, height, i){
        //fill cols
        for (let col = x - i; col <= x + i; col++) {
            if(y + i < height && col >= 0 && col < width)
                matrix[y + i][col] = i + 1;
            if(y - i >= 0 && col >= 0 && col < width)
                matrix[y - i][col] = i + 1;
        }

        //fill rows
        for (let row = y - i; row <= y + i; row++) {
            if(x - i >= 0 && row >= 0 && row < height)
                matrix[row][x - i] = i + 1;
            if(x + i < width && row >= 0 && row < height)
                matrix[row][x + i] = i + 1;
        }

        return matrix;
    }

    let matrix = [];
    for(let i=0; i < height; i++) {
        let rs = [];
        for(let j=0; j < width; j++) {
            rs.push(0);
        }
        matrix.push(rs);
    }

    let i = 1;
    matrix[y][x] = i;
    while(x - i >= 0 || x + i < width || y - i >= 0 || y + i < height){
        matrix = fill(matrix, width, height, i);
        i++;
    }

    matrix.forEach(a => console.log(a.join(' ')));
}

orbit([4, 4, 0, 0]

);
