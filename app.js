// Seleção dos elementos da DOM
const inputAmigo = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

// Array para armazenar os nomes
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
  const nome = inputAmigo.value.trim(); // Remove espaços em branco do início e fim

  // Validação: campo vazio
  if (nome === "") {
    alert("Por favor, insira um nome válido.");
    return;
  }

  // Adiciona o nome ao array
  amigos.push(nome);

  // Atualiza a lista de amigos na tela
  atualizarListaAmigos();

  // Limpa o campo de texto e foca novamente nele
  inputAmigo.value = "";
  inputAmigo.focus();
}

// Função para atualizar a lista de amigos na tela
function atualizarListaAmigos() {
  listaAmigos.innerHTML = ""; // Limpa a lista atual

  amigos.forEach((nome, index) => {
    const li = document.createElement("li");
    li.textContent = nome;

    // Adiciona um botão para remover o amigo da lista
    const btnRemover = document.createElement("button");
    btnRemover.textContent = "Remover";
    btnRemover.className = "remove-button";
    btnRemover.setAttribute("aria-label", `Remover ${nome}`);
    btnRemover.onclick = () => removerAmigo(index);

    li.appendChild(btnRemover);
    listaAmigos.appendChild(li);
  });
}

// Função para remover um amigo da lista
function removerAmigo(index) {
  amigos.splice(index, 1); // Remove o amigo do array
  atualizarListaAmigos(); // Atualiza a lista na tela
}

// Função para sortear um amigo
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("A lista está vazia. Adicione amigos antes de sortear.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];

  // Exibe o amigo sorteado no resultado
  resultado.innerHTML = `<li>Amigo secreto: <strong>${amigoSorteado}</strong></li>`;
}
