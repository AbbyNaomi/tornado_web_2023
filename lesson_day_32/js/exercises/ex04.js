async function processTask(number) {
    const taskStatus = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (taskId > 0) {
                resolve(`Task ${taskId} completed successfully.`);
            }else {
                reject(`Invalid Task ID: ${taskId}`);
            }
        }, 1000);
    });

    try {
        const result = await taskStatus;
        console.log(result);
    } catch (error) {
        console.error("Error:", error);
    }
}

processTask(5);
processTask(-1);