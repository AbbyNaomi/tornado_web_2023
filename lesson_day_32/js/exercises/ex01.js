

function delayedHello() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello, World!");
        }, 2000);
    });
}

delayedHello()
        .then(message => console.log(message))
        .catch(error => console.error(error));