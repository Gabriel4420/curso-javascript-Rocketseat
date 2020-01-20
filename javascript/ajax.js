// xhr = new XMLHttpRequest();

// xhr.open('GET', 'https://api.github.com/users/gabriel4420');

// xhr.send(null);

// xhr.onreadystatechange = function(){
//     if(xhr.readyState === 4)
//         console.log(JSON.parse(xhr.responseText));
// }

// promisses 

// var minhaPromisse = function(){
//     return new Promise(function(resolve,reject){
//         xhr = new XMLHttpRequest();
//         xhr.open('GET', 'https://api.github.com/users/gabriel4420');
//         xhr.send(null);
//         xhr.onreadystatechange = function(){
//             if(xhr.readyState === 4){
//                 if(xhr.status === 200){
//                     resolve(JSON.parse(xhr.responseText));
//                 }else{
//                     reject('erro na requisição');
//                 }
//             }

//         }
//     })
// }

// axios.get('https://api.github.com/users/gabriel4420').then(function(response) {
//     console.log(response.data);
// }).catch(function(error){
//     console.warn(error);
// })

var listElement = document.querySelector('#lista-git ul');
var inputElement = document.querySelector('input');
var buttonElement = document.querySelector('button');


function renderLista(repositories){

   listElement.innerHTML = '';

    for (repo of repositories){
        var listaElement = document.createElement("li");
        var listaText = document.createTextNode(repo.name);

        listaElement.appendChild(listaText);
        listElement.appendChild(listaElement);
    }
}

function renderLoading(loading) {
    listElement.innerHTML = "";

    var textElement = document.createTextNode('Carregando...');
    var loadingElement = document.createElement('li');

    loadingElement.appendChild(textElement);
    listElement.appendChild(loadingElement);
  }

  function renderError(loading) {
    listElement.innerHTML = "";

    var textElement = document.createTextNode('Erro!');
    var errorElement = document.createElement('li');

    errorElement.style.color = "#F00";

    errorElement.appendChild(textElement);
    listElement.appendChild(errorElement);
  }




function listRepositories() {
    var user = inputElement.value;

    if (!user) return;

    renderLoading();

    axios.get('https://api.github.com/users/' + user + '/repos')
      .then(function (response) {
        renderLista(response.data);
      })
      .catch(function () {
        renderError();
      });
  }


buttonElement.onclick = listRepositories;