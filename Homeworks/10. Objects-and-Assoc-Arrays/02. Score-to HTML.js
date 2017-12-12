function solve(input) {

    let html = '<table>\n<tr><th>name</th><th>score</th></tr>\n';

    let scores = JSON.parse(input);
    for (let score of scores) {

        html += `  <tr><td>${htmlEscape(score.name)}</td><td>${Number(score.score)}</td></tr>\n`;
    }

    html += '</table>'
    console.log(html);

    function htmlEscape(text) {
        let map = {'"': '&quot;', '&': '&amp;', "'": '&#39;', '<': '&lt;', '>': '&gt;'};

        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }
}
