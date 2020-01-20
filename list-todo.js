var listElement = document.querySelector('#lista ul');
var inputElement = document.querySelector('#lista input');
var btnElement = document.querySelector('#btn-adicionar');

var todos = [
    'Fazer café',
    'Estudar Javascript',
    'Acessar comunidade da rocketseat',
];

function renderTodo(){

    listElement.innerHTML = '';

    for (todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);

    }
}



function addTodo(){
    var todoText = inputElement.value;

    todos.push(todoText);

    inputElement.value = '';

    renderTodo();
}

btnElement.onclick = addTodo();

