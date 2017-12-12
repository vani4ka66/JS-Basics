//solve 50%

function solve(input) {

    let requestedCourse = input[input.length - 1].trim();
    let averagePoints = 0;
    let count = 0;

    for (let i = 0; i < input.length -1; i++) {

        let currentLine = input[i].split(/\s+/).filter(function (x) {return x});
        let nameMach = currentLine[0];
        let courseMach = currentLine[1];
        let examPointsMach = currentLine[2];
        let bonusMach = currentLine[3];

        if(courseMach == requestedCourse){

            averagePoints += Number(examPointsMach);
            count++;
        }

            if(examPointsMach < 100){
                console.log(`${nameMach} failed at "${courseMach}"`)
            }
            else{
                let points = (examPointsMach - (examPointsMach*80/100)) + Number(bonusMach);
                points = (points*100)/100;

                let grade = ((points/80)*4)+2;

                if(grade > 6){
                    grade = 6;
                }

                console.log(`${nameMach}: Exam - "${courseMach}"; Points - ${points}; Grade - ${grade.toFixed(2)}`)
            }

    }
        let sum = averagePoints/count;
    console.log(`"${requestedCourse}" average points -> ${(sum*100)/100}`);


}

