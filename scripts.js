// script.js
function filtrarLista() {
  const input = document.getElementById('searchBar');
  const filtro = input.value.toLowerCase();
  const lista = document.getElementById('lista');
  const itens = lista.getElementsByTagName('li');

  for (let i = 0; i < itens.length; i++) {
    const texto = itens[i].textContent || itens[i].innerText;
    if (texto.toLowerCase().indexOf(filtro) > -1) {
      itens[i].style.display = '';
    } else {
      itens[i].style.display = 'none';
    }
  }
}
