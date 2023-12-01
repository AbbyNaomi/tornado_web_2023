const users = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
    },
]

function searchUser(keyword) {
    const filteredUsers = users.filter(user => user.name.includes(keyword));
    document.getElementById('searchResults').innerHTML = filteredUsers.map(user => `<p>${user.name}<p/>`).join('');
}

document.getElementById('searchBox').addEventListener('input', (e) => searchUser(e.target.value));