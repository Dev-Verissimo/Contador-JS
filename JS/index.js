function decrementar() {
  let stringNumber = document.querySelector(".valor").innerHTML;
  let valorAtual = parseInt(stringNumber);
  valorAtual = valorAtual - 1;
  atualizarValor(valorAtual);
}

function incrementar() {
  let stringNumber = document.querySelector(".valor").innerHTML;
  let valorAtual = parseInt(stringNumber);
  valorAtual = valorAtual + 1;
  atualizarValor(valorAtual);
}

function atualizarValor(valorAtual) {
  const elemento = document.querySelector(".valor");
  elemento.innerHTML = valorAtual;
}
