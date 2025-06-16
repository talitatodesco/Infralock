/** Tais Silva, Talita Todesco Marcondes, Victor Rumualdo  */
let indice = 0;
const slides = document.querySelectorAll('.slide');

function mostrarProximoSlide() {
  slides[indice].classList.remove('ativo');
  indice = (indice + 1) % slides.length;
  slides[indice].classList.add('ativo');
}

setInterval(mostrarProximoSlide, 5000);
