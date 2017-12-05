function solve(arr) {
	    let nameRgx = /(\*[A-Z][a-zA-z]*)(?=\s|$)/g;
	    let phoneRgx = /\+[0-9\-]{10}(?=\s|$)/g;
	    let idRgx = /\![A-Za-z0-9]+(?=\s|$)/g;
	    let baseRgx = /\_[A-Za-z0-9]+(?=\s|$)/g;
	
	    let result = [];
	    arr.forEach(a => {
	        a = a
	            .replace(nameRgx, (match) => '|'.repeat(match.length))
	            .replace(phoneRgx, (match) => '|'.repeat(match.length))
	            .replace(idRgx, (match) => '|'.repeat(match.length))
	            .replace(baseRgx, (match) => '|'.repeat(match.length));
	        result.push(a);
	    })
	
	    console.log(result.join('\n'));
	}
