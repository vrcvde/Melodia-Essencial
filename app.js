// Função para exibir todos os artistas
function exibirArtistas() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Variável para armazenar os resultados de forma acumulada
    let resultados = "";

    // Loop "for...of" para iterar pelos dados e exibir todos os artistas
    for (let dado of dados) {
        resultados += `
        <div class="item-resultado">
            <!-- Título do artista com link para o Instagram -->
            <h2> <a href="${dado.social}" target="_blank">${dado.titulo}</a></h2>
            
            <!-- Imagem do artista -->
            <img src="${dado.imagem}" alt="Imagem do artista" class="foto-artista">
            
            <!-- Descrição do artista -->
            <p class="descricao-meta ">${dado.descricao}</p>
            
            <!-- Link para o perfil do artista no Spotify -->
            <a href="${dado.link}" target="_blank">Perfil do Artista no Spotify</a>
        </div>`;
    }

    // Insere o conteúdo gerado dentro da seção "resultados-pesquisa"
    section.innerHTML = resultados;
}

// Chama a função para exibir os artistas assim que a página carregar
window.onload = exibirArtistas;
