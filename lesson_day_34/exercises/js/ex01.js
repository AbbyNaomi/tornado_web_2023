async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/2')
    const post = await response.json();
    console.log(post)


    const postTitle = document.createElement('h1');
    postTitle.innerHTML = post.title;

    const postBody = document.createElement('div');
    postBody.innerHTML = post.body;
    
    document.body.appendChild(postTitle);
    document.body.appendChild(postBody);
}


fetchData()