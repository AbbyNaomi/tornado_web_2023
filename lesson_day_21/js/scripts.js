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
    liTag.addEventListener('click', changeColor);
    ulTag.appendChild(liTag);
}

contentOne.appendChild(ulTag);



function changeColor(element){
    console.log(element);
    element.target.style.backgroundColor = element.target.textContent;

}

function textDecorate(element){
    if(element.hasAttribute('style')){
    }else{
        element.style.textDecorate= 'line-through';
    }
}


