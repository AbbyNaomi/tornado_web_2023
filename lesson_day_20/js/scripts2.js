console.log('JS DOM create element HTML functions');


var h2Element = document.createElement('h2');

h2Element.textContent= 'List of todos';

var content = document.getElementById('content');
content.appendChild(h2Element);

var listOfTodos = ['HTML Functions',
'JS event',
'JS DOM create element HTMl functions'];

var ulElement = document.createElement('ul');

for(let i=0; i<listOfTodos.length; i++){
    var liElement = document.createElement('li');
}