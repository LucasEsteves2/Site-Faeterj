//ficou muito mal otimizado to aprendendo a sintaxe do js ainda :(



//DE PARA
var botao = document.querySelector(".botao");

botao.addEventListener("click", msgDepara);

function msgDepara() {
  alert(
    "De Para ainda não esta disponivel, por favor fique de olho no calendario!!"
  );
}

//ANIMAR AS PAGINAS

var animar = document.querySelectorAll("[data-animacao]"); //Anima a parte inicial

var animarNoticias = document.querySelectorAll("[data-animacaoNoticias]"); //Anima a parte Da pag de noticias


animeScroll(animar); //garantindo que ela seja executada
animeScroll(animarNoticias); //garantindo que ela seja executada

if (animar.length) {
  //evitando que a função fique se ativando nas paginas que nao possui animação

  window.addEventListener("scroll", function () {
    animeScroll(animar);
  });
}
if (animarNoticias.length) {
  window.addEventListener("scroll", function () {
    animeScroll(animarNoticias);
  });
}



function animeScroll(animar) {
  const paginaTopo = window.pageYOffset + (window.innerHeight * 3) / 4; //pegando a distancia do topo da pag ate a minha area pra aniamr

  animar.forEach(function (element) {
    if (paginaTopo > element.offsetTop) {
      element.classList.add("animar");
    } else {
      if (animarNoticias.length) {
        element.classList.remove("animar"); //dessa forma ele so faz o efeito de remove na tela noticiasfaeterj
      }
    }
  });
}

$(document).foundation();

$(".is-hover a").on("mouseover", function () {
  var idx = $(this).parent().index() + 2;
  $(".info:nth-child(" + idx + ")").addClass("info-visible");
  $(".info:nth-child(" + idx + ")")
    .siblings()
    .removeClass("info-visible");
});

$(".dropdown").on("mouseout", function () {
  $(".info:nth-child(1)")
    .addClass("info-visible")
    .siblings()
    .removeClass("info-visible");
});
