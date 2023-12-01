


async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json();


    const usersSlice = users.slice(0, 3);

    const userElement = document.createElement('ul');
    
    usersSlice.forEach(user => {
        const li = document.createElement('li');
        li.textContent = user.name;
        userElement.appendChild(li);
    });
    
    document.body.appendChild(userElement);
}


fetchData()