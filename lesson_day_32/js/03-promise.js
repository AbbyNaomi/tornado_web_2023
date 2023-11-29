let myPromise = new Promise((resolve, reject) => {
    const condition = false;
    if (condition) {
        resolve('Promis is resolved successfully.');
    } else {
        reject('Promise is rejected');
    }
});

console.log(myPromise);

myPromise.then((res) => {
    console.log(res);
});

myPromise.catch((err) => {
    console.log(err);
});

myPromise
    .then((message) => console.log(message))
    .then(() => console.log('This is another then() block.'))
    .catch((error) => console.error(error))
    .finally(() => console.log('Promise is settled.'));


    
