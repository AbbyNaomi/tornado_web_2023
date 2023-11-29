function isNumberEven(number){
    return new Promise((resolve, reject) => {
        if (number % 2 == 0) {
            resolve('Even Number');
        } else {
            reject('Odd Number');
        }
    });
}

isNumberEven(10)
    .then((res) => console.log(res))
    .catch((err) => console.error(err))

isNumberEven(11)
    .then((res) => console.log(res))
    .catch((err) => console.error(err))

isNumberEven(12)
    .then((res) => console.log(res))
    .catch((err) => console.error(err))