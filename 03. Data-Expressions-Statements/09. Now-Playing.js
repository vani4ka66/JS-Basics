function solve([trackName, artistName, duration]) {

    let person = {name: artistName, track: trackName, duration: duration};


    console.log('Now Playing: ' + person.name + ' - ' + person.track + ' [' + person.duration + ']');
}

rectangle(['Number One', 'Nelly', '4:09']);
