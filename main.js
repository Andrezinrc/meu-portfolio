//função para animar o hambúrguer e o menu

function animar() {

  var btn = document.getElementById("btn-menu");
  btn.classList.toggle('ativar')

  var menu = document.getElementById("menu")
  menu.classList.toggle('abrirMenu');
}


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
