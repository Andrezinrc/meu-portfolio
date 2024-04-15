//função para animar o hambúrguer e o menu
var btn = document.getElementById("btn-menu");

var menu = document.getElementById("menu")
  
function animar() {
  btn.classList.toggle('ativar')
  menu.classList.toggle('abrirMenu');
}

var sobremim = document.getElementById("sobremim")
sobremim.addEventListener("click", () => {
  animar()
})
var habilidade = document.getElementById("habilidade")
habilidade.addEventListener("click", () => {
  animar()
})
var projeto = document.getElementById("projeto")
projeto.addEventListener("click", () => {
  animar()
})
var servico = document.getElementById("servico")
servico.addEventListener("click", () => {
  animar()
})
var contato = document.getElementById("meucontato")
contato.addEventListener("click", () => {
  animar()
})

// efeito de escrever e apagar
var textos = ["Desenvolvedor Front-end", "Freelancer", "Designer"];
var indice = 0;
var apagando = false;
var velocidadeEscrita = 100;
var velocidadeApagar = 50; 

function efeitoEscrita() {
  var textoAtual = document.getElementById('texto-digitado').innerHTML;
  var textoAlvo = textos[indice];

  if (!apagando) {
    if (textoAtual !== textoAlvo) {
      textoAtual = textoAlvo.substring(0, textoAtual.length + 1);
      document.getElementById('texto-digitado').innerHTML = textoAtual;
      setTimeout(efeitoEscrita, velocidadeEscrita);
    } else {
      apagando = true;
      setTimeout(efeitoEscrita, 1000);
    }
  } else {
    if (textoAtual !== "|") {
      textoAtual = textoAtual.substring(0, textoAtual.length - 1);
      document.getElementById('texto-digitado').innerHTML = textoAtual === "" ? "|" : textoAtual;
      setTimeout(efeitoEscrita, velocidadeApagar);
    } else {
      apagando = false;
      indice = (indice + 1) % textos.length;
      setTimeout(efeitoEscrita, 1000);
    }
  }
}

window.onload = function() {
  efeitoEscrita();
};

// abrir a segunda parte de projetos

var segundaParte = document.getElementById("segunda-parte-projetos")
var verMais = document.getElementById("ver-mais")

verMais.addEventListener("click", () => {
  if(segundaParte.style.display == "none"){
    segundaParte.style.display = "flex";
    verMais.innerText = "Ver Menos";
  }else{
    segundaParte.style.display = "none";
    verMais.innerText = "Ver Mais";
  }
})