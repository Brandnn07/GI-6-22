const fs = require('fs');

const planets = 'planets.txt'

fs.readFile(planets, 'utf8', (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
});