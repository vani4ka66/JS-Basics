//solve 80%

function solve(input){

    let last = input.pop();

    for (let i = 0; i < input.length - 2; i+=3) {
        let methodPattern = /^Method:\s(GET|POST|PUT|DELETE)$/g;
        let credentialPattern = /^Credentials:\s(Basic|Bearer)\s([a-zA-Z0-9]+)$/g;
        let contentPatern = /^Content:\s([.a-zA-Z0-9]+)$/g;

        let methodRow = input[i];
        let credentialRow = input[i + 1];
        let contentRow = input[i+2];

        let methodMatch = methodPattern.exec(methodRow);
        let credentialMatch = credentialPattern.exec(credentialRow);
        let contentMatch = contentPatern.exec(contentRow);

        if(!methodMatch || !credentialMatch || !contentMatch){
            console.log('Response-Code:400')
            continue;
        }
        else {
            if (methodMatch[1] !== 'GET' && credentialMatch[1] === 'Basic') {
                console.log(`Response-Method:${methodMatch[1]}&Code:401`)
                continue;
            }

            let isTokenAuthorized = false;
            for (var j = 0; j < last.length; j+=2) {
                let digit = Number(last[j]);
                let targetLetter = last[j+1];
                    let count = 0;
                for (var k = 0; k < credentialMatch[2].length; k++) {
                    let letter = credentialMatch[2][k];
                    if(letter == targetLetter){
                        count++;
                        if(count >= digit){
                            isTokenAuthorized = true;
                            break;
                        }
                    }
                }
            }
            if(isTokenAuthorized){
                console.log(`Response-Method:${methodMatch[1]}&Code:403`)
                continue;
            }

            if(methodMatch && credentialMatch && contentMatch){
                console.log(`Response-Method:${methodMatch[1]}&Code:200&Header:${credentialMatch[2]}`)
            }
        }
    }
}

