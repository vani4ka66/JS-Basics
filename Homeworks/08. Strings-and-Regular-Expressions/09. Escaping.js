function solve(input) {

    let html = '<ul>\n';
    let arr = [];

    for (let obj of input) {
        let word = '';
        for (let letter of obj) {
            if(letter == '<'){
                word += '&lt;'
            }
            else if(letter == '>'){
                word += '&gt;'
            }
            else if(letter == '&'){
                word += '&amp;'
            }
            else if(letter == '"'){
                word += '&quot;'
            }
            else{
                word += letter;
            }
        }


        html += `  <li>${word}</li>\n`;
    }

    html += '</ul>';
    console.log(html);
}

solve(['<b>unescaped text</b>', 'normal text']
);
