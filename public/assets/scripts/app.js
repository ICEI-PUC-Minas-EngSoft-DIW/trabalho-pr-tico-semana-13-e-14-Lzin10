const itens = [
    {
        id: "moedas",
        nome: "Moedas Antigas",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Euro_coin_front.jpg",
        descricao: "Coleção histórica contendo moedas raras de várias eras e países.",
        local: "https://www.google.com/maps?q=feira+de+antiguidades"
    },
    {
        id: "livros",
        nome: "Livros Raros",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/8/89/Old_book_bindings.jpg",
        descricao: "Edições extremamente raras, algumas com mais de 200 anos.",
        local: "https://www.google.com/maps?q=livraria+de+raridades"
    },
    {
        id: "figuras",
        nome: "Figuras de Ação",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Figurines_collection.jpg",
        descricao: "Miniaturas colecionáveis de séries, filmes e jogos.",
        local: "https://www.google.com/maps?q=loja+geek"
    }
];

const container = document.getElementById("cards-container");
const box = document.getElementById("details-box");

const dtitle = document.getElementById("details-title");
const dimg = document.getElementById("details-img");
const ddesc = document.getElementById("details-desc");
const dlocal = document.getElementById("details-local");

// gerar cards
itens.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <img src="${item.imagem}" alt="${item.nome}">
        <div class="info">
            <h3>${item.nome}</h3>
            <p>${item.descricao}</p>
        </div>
    `;

    card.onclick = () => abrirDetalhes(item);

    container.appendChild(card);
});

function abrirDetalhes(item) {
    dtitle.textContent = item.nome;
    dimg.src = item.imagem;
    ddesc.textContent = item.descricao;
    dlocal.href = item.local;

    box.style.display = "block";
    window.scrollTo({
        top: box.offsetTop - 40,
        behavior: "smooth"
    });
}

function fecharDetalhes() {
    box.style.display = "none";
}
