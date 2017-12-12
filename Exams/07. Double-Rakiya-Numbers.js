function solve([start, end]) {

    let html = '<ul>\n';

    let a = '';
    let b = '';
    let arrCurrent = [];

    for (let i = start; i <=end; i++) {

        let rakiya = false;

        let counter = 0;
        let current = i.toString();

        arrCurrent = Array.from(current);
        for (let j = 0; j < current.length; j++) {

            a = arrCurrent.shift();
            b = arrCurrent.shift();
            let ab = a+ b;

            let restArr = arrCurrent.join('');

            if(restArr.indexOf(ab) > -1){
                rakiya = true;
                current = arrCurrent;
                break;
            }
            else {
                arrCurrent.unshift(b);
            }

        }
        if(rakiya == false){
            html += `<li><span class='num'>${i}</span></li>\n`;
        }
        else{
            html += `<li><span class='rakiya'>${i}</span><a href="view.php?id=${i}>View</a></li>\n`
            rakiya = false;
        }
    }

    html += '</ul>'

    console.log(html);
}
