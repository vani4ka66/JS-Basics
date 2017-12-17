//solved 60%

function solve(input) {
    
    let pattern = /(^<message(.*?)\s+([to|from]+)=\"([a-zA-Z0-9\s\.]+)\"\s+([to|from]+)=\"([a-zA-Z0-9\s\.]+)\"([a-zA-Z0-9\s\.\\"=]+)*>(.*?)(\n)*(.*?)<\/message>$)/g;
    let pattern2 = /(^<message(.*?)\s+([a-z]+)=\"([a-zA-Z0-9\s\.]+)\"\s+([a-z]+)=\"([a-zA-Z0-9\s\.]+)\"([a-zA-Z0-9\s\.\\"=]+)*>(.*?)(\n)*(.*?)<\/message>$)/g;
    
    let sender = '';
    let reciever = '';
    let message = '';
    let secondMessage = '';
    let isNewLine = false;
    let isMissingAttributes = false;
    let isInvalidFormat = false;
    let miss = false;

    if(match2 = pattern2.exec(input)){
        if(!((match2[3] == 'to'  && match2[5] == 'from') || (match2[3] == 'from'  && match2[5] == 'to'))){
            isMissingAttributes = true;
            miss = true;
        }
    }
        if (match = pattern.exec(input)) {

            if (match[3] == 'to' && match[5] == 'from') {

                sender = match[6];
                reciever = match[4];
                message = match[10];

                if (match[8] != '') {
                    secondMessage = match[8];
                    isNewLine = true;
                }

            }
            else if (match[3] == 'from' && match[5] == 'to') {
                sender = match[4];
                reciever = match[6];
                message = match[10];
            }
            else {
                isMissingAttributes = true;
            }
        }
        else {
            isInvalidFormat = true;
        }
    
        let html = '<article>\n';
        html += `  <div>From: <span class="sender">${sender}</span></div>\n`
        html += `  <div>To: <span class="recipient">${reciever}</span></div>\n`
        html += '  <div>\n';
        if (isNewLine) {
            html += `    <p>${secondMessage}</p>\n`
        }
        html += `    <p>${message}</p>\n`;
        html += '  </div>\n';
        html += '</article>';

        if (miss) {
            console.log('Missing attributes')
        }
        else {

            if (isInvalidFormat) {
                console.log('Invalid message format');
            }
            else {


                if (isMissingAttributes) {
                    console.log('Missing attributes')
                }
                else {
                    console.log(html);
                }
            }
        }
}
