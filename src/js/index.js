/*para comecar a escrever o codigo javascript, cria uma pasta js a partir da pasta src, criar um arquivo index.js a partir da pasta js*/
/*antes de fechar o body no html é preciso usar a tag script, feito isso para linkar o java script no html*/
/*usado para manipular os dados do html*/
/*funcao alert("")é usada para mostrar uma mensagem na tela*/

/*OBJETIVO - quando clicarmos na aba temos que mostrar o conteudo da aba que foi clicada
pelo usuario e esconder o conteudo da aba anterior.

passo 1 - dar um jeito de pegar os elementos que representam as abas no HTML.
passo 2 - dar um jeito de identificar o clique no elemento da aba.
passo 3 - quando o usuario clicar, desmarcar a aba selecionada.
passo 4 - marcar a aba clicada como selecionado.
passo 5 - esconder a aba anterior.
passo 6 - mostrar o conteudo da aba selecionada. */

//passo 1 - dar um jeito de pegar os elementos que representam as abas no HTML.
const abas = document.querySelectorAll(".aba");

/*sempre com tem ponto . e depois uma palavra verde, essa palavra é um metodo da outra, ou seja, log é metodo de console*/
/*essa tag tem a funcao tem buscar no html tudo as tags que tem escrito aba*/
/*console.log() tem a funcao de mostrar na tela f12 palavras que colocar dentro dos parenteses*/
/*com a variavel const, o valor de abas comeca a valer o que esta depois do igual*/
/*variavel const significar constante, que ninguem pode alterar essa variavel*/



abas.forEach(aba =>{
    //passo 2 - dar um jeito de identificar o clique no elemento da aba.
    aba.addEventListener("click", function(){


        if(aba.classList.contains("selecionado")){
            return;
        };

        selecionarAba(aba)
        mostrarInformacaoDaAba(aba)


    });
});

function selecionarAba(aba){
    //passo 3 - quando o usuario clicar, desmarcar a aba selecionada.
    const abaSelecionada = document.querySelector(".aba.selecionado");   /*tem a funcao de pegar so uma aba selecionada*/
    abaSelecionada.classList.remove("selecionado");

    //passo 4 - marcar a aba clicada como selecionado.   
    aba.classList.add("selecionado");

}

function mostrarInformacaoDaAba(aba){
    //passo 5 - esconder a aba anterior.
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
    informacaoSelecionada.classList.remove("selecionado");

    //passo 6 - mostrar o conteudo da aba selecionada.
    const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`

    const informacaoaSerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
    informacaoaSerMostrada.classList.add("selecionado")
}