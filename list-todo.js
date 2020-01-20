var listElement = document.querySelector('#lista ul');
var inputElement = document.querySelector('input');
var buttonElement = document.querySelector('button');


var listas = JSON.parse(localStorage.getItem('lista-de-afazeres'));

function renderLista(){

    listElement.innerHTML = '';

    for (lista of listas){
        var listaElement = document.createElement("li");
        var listaText = document.createTextNode(lista);

        var linkElement = document.createElement('a');

        var pos = listas.indexOf(lista);

        linkElement.setAttribute('onclick','deleteItemLista('+pos+')');


        linkElement.setAttribute('href', '#');
        linkElement.setAttribute('class', 'button');
        var linkText = document.createTextNode('excluir');

        linkElement.appendChild(linkText);
        listaElement.appendChild(linkElement);
        listaElement.appendChild(listaText);
        listElement.appendChild(listaElement);
    }
}

renderLista();

function addTask(){
    var tasktext = inputElement.value;

    listas.push(tasktext);

    inputElement.value = '';
    renderLista();
    saveItemLista();
}

buttonElement.onclick = addTask;

function deleteItemLista(pos){
    listas.splice(pos,1);
    renderLista();
    saveItemLista();
}

function saveItemLista(){
    JSON
    localStorage.setItem('lista-de-afazeres', JSON.stringify(listas));
}