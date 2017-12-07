$("#botao-frase").click(geraFraseAleatoria);
$("#botao-id").click(buscaFrase);
$("#botao-sync").click(sincronizaEstatisticas);

//Utilizando função em Ajax para fazer requisição e trazer dados de maneira assíncrona
function geraFraseAleatoria(){

    $("#spinner").toggle();

    $.get("http://localhost:3000/frases", trocaFraseAleatoria)
    .fail(function(){
        $("#erro").toggle();
        setTimeout(function(){
            $("#erro").toggle();
        }, 1500);
    })
    .always(function(){
        $("#spinner").toggle();
    });
}

//Troca a frase aleatóriamente de acordo com as frases armazenados no array no arquivo frases.js
function trocaFraseAleatoria(data){
    var frase = $(".frase");
    var numero_aleatorio = Math.floor(Math.random() * data.length);
    frase.text(data[numero_aleatorio].texto);
    atualizaTempoInicial(data[numero_aleatorio].tempo);
    atualizaTamanhoFrase();
}

function buscaFrase(){
    $("#spinner").toggle();
    var fraseId = $("#frase-id").val();
    var data = {id: fraseId};
    $.get("http://localhost:3000/frases", data, trocaFrase)
    .fail(function(){
        $("#erro").toggle();
        setTimeout(function(){
            $("#erro").toggle();
        }, 2000)
    })
    .always(function(){
        $("#spinner").toggle();
    });
}

function trocaFrase(data){
    var frase = $(".frase");
    frase.text(data.texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial();
}

function sincronizaEstatisticas(){
    var estatisticas = [];
    var linhas = $("tbody>tr")
    linhas.each(function(){
        var usuario = $(this).find("td:nth-child(1)").text();
        var palavras = $(this).find("td:nth-child(2)").text();
        
        var obj_estatisticas = {
            usuario: usuario,
            palavras: palavras
        }

        estatisticas.push(obj_estatisticas);

    });

    var dados = {
        estatisticas: estatisticas
    };

    console.log(dados);

    $.post("http://localhost:3000/placar", dados, function(){
        console.log("Salvou!");
    });

}