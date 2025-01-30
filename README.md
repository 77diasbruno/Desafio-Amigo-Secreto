🎁 Amigo Secreto

Este é um projeto simples de Amigo Secreto, desenvolvido com HTML, CSS e JavaScript. Ele permite adicionar nomes a uma lista e sortear aleatoriamente um participante.

🚀 Funcionalidades

Adicionar amigos à lista

Impedir nomes duplicados

Exibir dinamicamente a lista de amigos

Sortear um amigo aleatoriamente

Exibir o nome sorteado na tela

📌 Como Usar

Clone o repositório:

git clone https://github.com/seu-usuario/amigo-secreto.git

Abra o arquivo index.html no navegador

Digite um nome no campo e clique em "Adicionar"

Clique no botão "Sortear Amigo" para selecionar um amigo aleatoriamente

🛠️ Tecnologias Utilizadas

HTML → Estrutura da página

CSS → Estilização do layout

JavaScript → Lógica de funcionamento

📜 Código Principal

Adicionar Amigos (app.js)

function adicionarAmigo() {
  let nome = document.getElementById("amigo").value.trim();
  if (nome === "" || amigos.includes(nome)) {
    alert("Nome inválido ou já adicionado!");
    return;
  }
  amigos.push(nome);
  document.getElementById("amigo").value = "";
  exibirAmigos();
}

Sortear Amigo

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("A lista está vazia!");
    return;
  }
  let indice = Math.floor(Math.random() * amigos.length);
  document.getElementById("resultado").innerHTML = `<li>${amigos[indice]} 🎉</li>`;
}

📷 Demonstração



📄 Licença

Este projeto está sob a Licença MIT – sinta-se à vontade para utilizá-lo e modificá-lo! 😃

🔹 Criado por Bruno, para o fim de cumprir o desafio da Alura! 

