async function searchUser(keyword) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const users = await response.json();
    const filteredUsers = users.filter(user => user.title.includes(keyword));
    document.getElementById('searchResults').innerHTML = filteredUsers.map(user => `<p>${user.title}<p/>`).join('');
}

document.getElementById('searchBox').addEventListener('input', (e) => searchUser(e.target.value));
