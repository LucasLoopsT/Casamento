// // CONTAGEM

// function contagemRegressiva(dataAlvo) {
//   let intervalID; // Mova a declaração para fora da função setInterval

//   // Função para atualizar o conteúdo HTML
//   function atualizarContagem(dias, horas, minutos, segundos) {
//     document.getElementById('days').innerHTML = dias;
//     document.getElementById('hours').innerHTML = horas;
//     document.getElementById('minutes').innerHTML = minutos;
//     document.getElementById('seconds').innerHTML = segundos;
//   }

//   // Função para calcular a diferença de tempo
//   function calcularDiferenca() {
//     const agora = new Date().getTime();
//     const diferencaEmMilissegundos = dataAlvoEmMilissegundos - agora;

//     const dias = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));
//     const horas = Math.floor((diferencaEmMilissegundos % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutos = Math.floor((diferencaEmMilissegundos % (1000 * 60 * 60)) / (1000 * 60));
//     const segundos = Math.floor((diferencaEmMilissegundos % (1000 * 60)) / 1000);

//     atualizarContagem(dias, horas, minutos, segundos);

//     // Verifica se a contagem regressiva chegou a zero
//     if (diferencaEmMilissegundos <= 0) {
//       clearInterval(intervalID);
//       atualizarContagem(0, 0, 0, 0);
//     }
//   }

//   // Inicializa a contagem regressiva
//   const dataAlvoEmMilissegundos = dataAlvo.getTime();
//   calcularDiferenca();
//   intervalID = setInterval(calcularDiferenca, 1000);
// }

// document.addEventListener('DOMContentLoaded', function() {
//   // Defina a data alvo (ano, mês, dia, horas, minutos, segundos)
//   const dataAlvo = new Date('2024-07-19T23:59:59');

//   // Chama a função
//   contagemRegressiva(dataAlvo);
// });


// // HEADER

// document.addEventListener("DOMContentLoaded", function() {
//   document.getElementById("menu-icon").addEventListener("click", function() {
//     let menu = document.getElementById("menu");
//     menu.classList.toggle("active");
//   });
// });

// const scrollWhere = (element) => {
//   var element = document.querySelector(element);

//   if (element) {
//     var topOffset = element.getBoundingClientRect().top + window.pageYOffset;
//     window.scrollTo({ top: topOffset, behavior: 'smooth' });
//   }
// }

// document.addEventListener("DOMContentLoaded", function() {
//   var scrollToTopButton = document.getElementById("ancora");

//   window.addEventListener("scroll", function() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//       scrollToTopButton.style.display = "flex";
//     } else {
//       scrollToTopButton.style.display = "none";
//     }
//   });  
// });