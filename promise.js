function startTimer(duration = 1000) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            return resolve('Fin du timer ' + duration / 1000 + 's');
        }, duration);
        setTimeout(function() {
            return reject('Fin du timer err' + duration / 1000 + 's');
        }, duration *2);
    });
}


startTimer(1500).then(function(msg) {
    console.log(msg);
}).catch(function(msg) { //pour prendre en charge le reject
    console.log(msg);
})
