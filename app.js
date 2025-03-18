//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// app.js

// app.js

let amigos = [];

function adicionarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    const nome = inputAmigo.value.trim();

    if (nome === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    amigos.push(nome);

    const listaAmigos = document.getElementById('listaAmigos');
    const novoItem = document.createElement('li');
    novoItem.textContent = nome;
    listaAmigos.appendChild(novoItem);

    inputAmigo.value = '';
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo antes de sortear!');
        return;
    }

    // Gerar um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar o resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>Amigo sorteado: ${amigoSorteado}</li>`;

    // Remover o amigo sorteado do array
    amigos.splice(indiceAleatorio, 1);

    // Atualizar a lista visual removendo todos os itens e recriando com o array atualizado
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpa a lista visual
    amigos.forEach(nome => {
        const novoItem = document.createElement('li');
        novoItem.textContent = nome;
        listaAmigos.appendChild(novoItem);
    });
}