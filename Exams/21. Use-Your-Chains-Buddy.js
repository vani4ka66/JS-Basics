function solve(input) {

let patterb = /(<p>)(.*?)(<\/p>)/g;
let str = '';

while (match = patterb.exec(input)){

    for (let letter of match[2]) {

        //console.log(match[2]);
        let regex = /[a-z0-9]/;
        if(match1 = regex.exec(letter)){
            if(letter.charCodeAt(0) > 96 && letter.charCodeAt(0) < 110){
                let char = letter.charCodeAt(0) + 13;
                str += String.fromCharCode(char);
            }
            else if(letter.charCodeAt(0) > 109 && letter.charCodeAt(0) < 123){
                let char = letter.charCodeAt(0) - 13;
                str += String.fromCharCode(char);
            }
            else if(letter.charCodeAt(0) > 47 && letter.charCodeAt(0) < 58){
                str += letter;
            }

        }
        else{
            str += ' ';
        }

    }
}
    console.log(str.replace(/\s+/g, ' '));
}

