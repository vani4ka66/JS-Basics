function solve(input) {

    let number = 0;
    let daggerOrSword = '';
    let type = '';

    let html = '<table border="1">\n<thead>\n<tr><th colspan="3">Blades</th></tr>\n<tr><th>Length [cm]</th><th>Type</th><th>Application</th></tr>\n</thead>\n<tbody>\n';

    for (let num of input) {
        
        number = parseInt(num);

        if (number > 10) {

            if (number % 5 == 1) {
                type = 'blade';
            }
            else if (number % 5 == 2) {
                type = 'quite a blade';
            }
            else if (number % 5 == 3) {
                type = 'pants-scraper';
            }
            else if (number % 5 == 4) {
                type = 'frog-butcher';
            }
            else if (number % 5 == 0) {
                type = '*rap-poker';
            }
            else {
                type = 'ERROR';
            }
            if (number > 40) {
                daggerOrSword = 'sword';
            }
            else {
                daggerOrSword = 'dagger';
            }
            html += `<tr><td>${number}</td><td>${daggerOrSword}</td><td>${type}</td></tr>\n`;

        }
    }
        html += '</tbody>\n</table>';
        console.log(html);
}


