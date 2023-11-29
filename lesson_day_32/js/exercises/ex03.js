function addRandomNumber(num) {
    return new Promise((resolve) => {
        const delay = 1000;
        const randomNumber = Math.floor(Math.random() * 10) + 1;

        setTimeout(() => {
            resolve(num + randomNumber);
        }, delay);
    });
}

addRandomNumber(5)
    .then(result => {
        console.log("First addition:", result);
        return addRandomNumber(result);
    })
    .then(result => {
        console.log("Second addition:", result);
        return addRandomNumber(result);
    })
    .then(result => {
        console.log("Final result after third addition:", result);
    })
    .catch(error => {
        console.error("Error in Promise chain:", error);
    });