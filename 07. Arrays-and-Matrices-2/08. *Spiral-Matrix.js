function solve(row, col) {
    var arr = Array(row),
        x = 0, y = col,
        total = row * col--,
        dx = 1, dy = 0,
        i = 1, j = 0;
    while (y) arr[--y] = [];
    while (i < total + 1) {
        arr[y][x] = i++;
        x += dx; y += dy;
        if (++j == col) {
            if (dy < 0) {x++; y++; col -= 2}
            j = dx; dx = -dy; dy = j; j = 0;
        }
    }

    for (let k = 0; k < arr.length; k++) {
       console.log(arr[k].join(' '))

    }
}
solve(5, 5);
