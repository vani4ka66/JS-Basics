function solve(name, email, tel, input) {

    let arr = [];

        //for (let text of input) {
            for (let sentence of input) {

                let namePattern = /<![a-zA-Z]+!>/g;
                let emailPattern = /<@[a-zA-Z]+@>/g;
                let telPattern = /<\+[a-zA-Z]+\+>/g;

                let match1 = namePattern.exec(sentence);
                let match2 = emailPattern.exec(sentence);
                let match3 = telPattern.exec(sentence);

                sentence = sentence.toString().replace(match1, name);
                sentence = sentence.toString().replace(match2, email);
                sentence = sentence.toString().replace(match3, tel);

                arr.push(sentence);
            }
    //}

    console.log(arr.join('\n'));

}

solve(
    'Pesho',
    'pesho@softuni.bg',
    '90-60-90',
    ['Hello, <!username!>!',
        'Welcome to your Personal profile.',
        'Here you can modify your profile freely.',
        'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
        'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
        'Your current phone number is: <+number+>. Would you like to change that? (Y/N)']

);
