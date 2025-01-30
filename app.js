//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
  let nome = document.getElementById("amigo").value.trim();

  if (nome === "") {
    alert("Por favor, insira um nome.");
    return;
  }

  if (amigos.includes(nome)) {
    alert("Este amigo já está na lista.");
    return;
  }

  amigos.push(nome);
  document.getElementById("amigo").value = "";
  exibirAmigos();
}

function exibirAmigos() {
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";

  amigos.forEach((amigo) => {
    let li = document.createElement("li");
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Adicione amigos para sortear!");
    return;
  }

  let indiceAleatorio = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[indiceAleatorio];

  console.log("Amigo sorteado: ", amigoSorteado);

  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}
