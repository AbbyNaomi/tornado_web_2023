
async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
     
    
    document.getElementById('posts').innerHTML = posts.map((u, index) => `<p onclick = fetchComments(${index}) >${u.title}<p/>`).join('');
    document.getElementById('comments').innerHTML = posts.map(u => `<p>${u.body}<p/>`).join('');
}
async function fetchComments(postId) {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments?postId=${postId}');
    const post = await response.json();
    console.log(postId)
}
fetchPosts()
