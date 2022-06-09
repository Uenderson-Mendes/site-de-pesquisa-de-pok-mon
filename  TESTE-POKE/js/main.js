document.getElementById('formulario').addEventListener('submit',pesquisarFilmes);

function pesquisarFilmes(e){
	var filmePesquisa = document.getElementById('pesquisar').value;
    buscarFilmes(filmePesquisa);
	e.preventDefault();

}
function buscarFilmes(filmePesquisa){

}