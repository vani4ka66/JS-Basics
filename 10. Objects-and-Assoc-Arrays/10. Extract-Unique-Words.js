function solve(input) {
    let unique = new Set();

    let text = input.join('\n');
    let words = text.split(/\W+/)
        .filter(a=> a !== '')
        .map(e=> e.toLowerCase())
        .forEach(a=> unique.add(a) );

    console.log([...unique].join(', '));
}
