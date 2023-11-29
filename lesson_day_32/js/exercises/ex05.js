async function getUserAndPosts(userId) {
    try {
        const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        console.log(userResponse);
    } catch (error) {
        console.log(error);
    }
}


getUserAndPosts();