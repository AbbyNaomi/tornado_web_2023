console.log('Lesson Day 21 - JS this keyword, exercises');



const myFavoriteColors = ['red', 'green','blue', 'yellow', 'orange' ];

let contenOneHeader = document.createElement('h2');
contentOneHeader.textContent = 'my Favorite Colors';

let contentOne = document.getElementById('contentOne');
contentOne.appendChild(contenOneHeader);


let ulTag = document.createElement('ul');

for (let i=0; i<myFavoriteColors.length; i++){
    let liTag = document.createElement('li');
    liTag.textContentn = myFavoriteColors[i];
    ulTag.appendChild(liTag);
}

contentOne.appendChild(ulTag);