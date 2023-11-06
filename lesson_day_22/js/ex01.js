console.log('My Small Website');


let header = document.createElement('header');
let headerH1 = document.createElement('h1');
headerH1.textContent = 'Welcome to My Website';
header.appendChild(headerH1);

let main = document.createElement('main');
let mainP = document.createElement('p');
main.textContent = 'This is a small website created using HTML and JavaScript.';
main.appendChild(mainP);

let footer = document.createElement('footer');
let footerP = document.createElement('p');
footer.textContent = '&copy; 2023 Your Name';
footer.appendChild(footerP);

document.body.appendChild(header);
document.body.appendChild(main);
document.body.appendChild(footer);