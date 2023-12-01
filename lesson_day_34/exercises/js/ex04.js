let page = 1;
async function fetchPosts(p) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${p}`);
    const posts = await response.json();

    document.getElementById('posts').innerHTML = posts.map(u => `<p>${u.title}<p/>`).join('');
}

fetchPosts(page)

document.getElementById('prev').addEventListener('click', () => {
    page = page - 1;
    fetchPosts(page)
});

document.getElementById('next').addEventListener('click', () => {
    page = page + 1;
    fetchPosts(page)
});
