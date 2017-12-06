function adicionaEstatistica(){
    var corpo_tabela = $(".estatisticas").find("tbody");
    var nome_usuario = "Tiago";
    var qtd_palavras = $("#contador-palavras").text();
    var linha_tabela = novaLinha(nome_usuario, qtd_palavras);
    linha_tabela.find(".botao-remover").click(removeLinha);

    corpo_tabela.prepend(linha_tabela);

    $(".estatisticas").slideDown(500);
    scrollEstatisticas();
}

function scrollEstatisticas(){
    var posicao_estatisticas = $(".estatisticas").offset().top;
    $("body").animate({
        scrollTop: posicao_estatisticas + "px"
    }, 1000);
}

function novaLinha(pnome_usuario, pqtd_palavras){
    var linha = $("<tr>");
    var coluna_nomeusuario = $("<td>").text(pnome_usuario);
    var coluna_qtdpalavras = $("<td>").text(pqtd_palavras);
    var coluna_remover = $("<td>");
    var a = $("<a>").addClass("botao-remover").attr("href", "#");
    var i = $("<i>").addClass("small").addClass("material-icons").text("delete");
    
    a.append(i);

    coluna_remover.append(a);

    linha.append(coluna_nomeusuario);
    linha.append(coluna_qtdpalavras);
    linha.append(coluna_remover);

    return linha;

}

function removeLinha(){
    event.preventDefault();
    var linha = $(this).parent().parent();
    linha.fadeOut(1000);
    setTimeout(function() {
        linha.remove();
    }, 1000);
}

$("#botao-estatisticas").click(exibeEstatisticas);

function exibeEstatisticas(){
    $(".estatisticas").stop().slideToggle(600);
}