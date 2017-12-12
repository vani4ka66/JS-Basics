function solve(input) {

    let questions = [];
    let answers = [];
    let html = '<?xml version="1.0" encoding="UTF-8"?>\n<quiz>\n';

    for (var i = 0; i < input.length; i++) {
        if(i %2 == 0){
            questions.push(input[i]);
        }
        else{
            answers.push(input[i]);
        }
    }

    for (let i = 0; i < questions.length; i++) {
        html += '  <question>\n';
        html += '    ' + questions[i] + '\n';
        html += '  </question>\n  <answer>\n';
        html += '    ' + answers[i] + '\n  </answer>\n';

    }

    html += '</quiz>';
    console.log(html);
}

solve([
    "Dry ice is a frozen form of which gas?",
    "Carbon Dioxide",
    "What is the brightest star in the night sky?",
    "Sirius"]
);
