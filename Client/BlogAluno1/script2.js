let currentSlide = 0;
const slides = document.querySelectorAll(".slides img");
const indicators = document.querySelector(".indicators");

// Criar indicadores
for (let i = 0; i < slides.length; i++) {
    let dot = document.createElement("span");
    dot.addEventListener("click", function () {
        currentSlide = i;
        updateCarousel();
    });
    indicators.appendChild(dot);
}

function moveSlide(direction) {
    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide > slides.length - 1) {
        currentSlide = 0;
    }

    updateCarousel();
}

function updateCarousel() {
    const offset = -currentSlide * 100;
    document.querySelector(
        ".slides"
    ).style.transform = `translateX(${offset}%)`;

    const activeIndicator = document.querySelector(".indicators .active");
    if (activeIndicator) {
        activeIndicator.classList.remove("active");
    }
    indicators.children[currentSlide].classList.add("active");
}

// Definir o primeiro indicador como ativo
indicators.children[0].classList.add("active");


document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.querySelector(".search-button");

    searchButton.addEventListener("click", function () {
        alert("Funcionalidade de pesquisa ainda não implementada.");
    });
});

//função redirecionar para o Perfil

function redirecionarPerfil(){
    var URL= "../Perfil/perfil.html";
    window.location.href=(URL);
  }
  
  //função redirecionar para o Mural
  
  function redirecionarMural(){
    var URL = '../MuralDeAvisosAdm/MuralDeAvisosADM.html'
    window.location.href = (URL);
  }
  
  //função redirecionar para o Blog
  
  function redirecionarBlog(){
    var URL = "../BlogAluno1/paginaBlog.html"
    window.location.href = (URL);
  }