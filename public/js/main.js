var campo = $(".campo-digitacao");
var tempo_inicial = $("#tempo-digitacao").text();

$(function(){
    atualizaTamanhoFrase();
    iniciaContadores();    
    iniciaCronometro();
    iniciaMarcadores();
    $("#botao-reiniciar").click(reiniciaTyper);
    atualizaEstatisticas();
});

function atualizaTamanhoFrase(){
    var frase = $(".frase").text();
    var num_palavras = frase.split(" ").length;
    var tamanho_frase = $("#tamanho-frase");
    tamanho_frase.text(num_palavras);
}

function iniciaContadores(){
    campo.on("input", function(){
        var conteudo_campo = campo.val();

        var quantidade_palavras = conteudo_campo.split(/\S+/).length - 1;
        $("#contador-palavras").text(quantidade_palavras);

        var quantidade_caracteres = conteudo_campo.length;
        $("#contador-caracteres").text(quantidade_caracteres);
    });
}

function iniciaCronometro(){
    campo.one("focus", function () {
        var tempo_restante = $("#tempo-digitacao").text();
        $("#botao-reiniciar").attr("disabled", true);
        var cronometroID = setInterval(function (){
            tempo_restante--;
            console.log(tempo_restante);
            $("#tempo-digitacao").text(tempo_restante);
            if(tempo_restante < 1){
                clearInterval(cronometroID);
                $("#botao-reiniciar").attr("disabled", false);
                finalizaTyper();
            }
        }, 1000);
    });
}

function finalizaTyper(){
    campo.attr("disabled", true);
    campo.addClass("campo-desabilitado");
    adicionaEstatistica();
}

var frase = 
campo.on("input", function () {
    
});

$("#botao-reiniciar").click(reiniciaTyper);

function reiniciaTyper(){
    campo.removeClass("campo-desabilitado");
    campo.attr("disabled", false);
    campo.val("");
    $("#contador-palavras").text("0");
    $("#contador-caracteres").text("0");    

    $("#tempo-digitacao").text(tempo_inicial);
    iniciaCronometro();

    campo.removeClass("borda-vermelha");
    campo.removeClass("borda-verde");

}

function iniciaMarcadores(){
    campo.on("input", function(){
        var frase = $(".frase").text();
        var frase_digitada = campo.val();
        if(frase.startsWith(frase_digitada)){
            campo.addClass("borda-verde");
            campo.removeClass("borda-vermelha");
        }
        else{
            campo.addClass("borda-vermelha");
            campo.removeClass("borda-verde");
        }

    });
}

function atualizaTempoInicial(tempo){
    tempo_inicial = tempo;
    $("#tempo-digitacao").text(tempo);
}