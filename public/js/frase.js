$("#botao-frase").click(geraFraseAleatoria);

//Utilizando função em Ajax para fazer requisição e trazer dados de maneira assíncrona
function geraFraseAleatoria(){
    $.get("http://localhost:3000/frases", trocaFraseAleatoria);
}

//Troca a frase aleatóriamente de acordo com as frases armazenados no array no arquivo frases.js
function trocaFraseAleatoria(data){
    var frase = $(".frase");
    var numero_aleatorio = Math.floor(Math.random() * data.length);
    frase.text(data[numero_aleatorio].texto);
    atualizaTempoInicial(data[numero_aleatorio].tempo);
    atualizaTamanhoFrase();
}